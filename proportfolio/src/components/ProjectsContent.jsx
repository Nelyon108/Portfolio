import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { ProjectData } from './ProjectsData';


const ProjectsContent = forwardRef((props, ref) => {
    const [hover, isHovered] = useState(null);

    const HoverStart = (id) => {
        isHovered(id);
    }

    const HoverEnd = () => {
        isHovered(null);
    }

    const project = ProjectData.map((data) => {
        const boxStyle = {
            backgroundImage: 'url(' + data.imageUrl + ')',
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
        }
        const hoverImage = {
            backgroundImage: 'url(' + data.imageUrl + ')',
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            opacity: 0.1,

        }
        return <div className='projectContainer' key={data.id}>
            <img src={data.imageUrl} className={hover === data.id ? "backgroundImg hover" : "backgroundImg"} />
            <div className={hover === data.id ? "hover projects" : "projects"}
                onMouseEnter={() => { HoverStart(data.id) }} onMouseLeave={() => { HoverEnd() }} /*style={hover === data.id ? {opacity: 0.3} : boxStyle}*/>

                <div className={hover === data.id ? "stayBottom activate" : "deactivate"} style={{opacity: 1,}}>
                    {data.projectLink ? <a href={data.projectLink} target="_blank" rel="noopener noreferrer">
                        <button className='shake'>View Project</button>
                    </a> : <></>}
                    {data.gitLink ? <a href={data.gitLink} target='_blank' className='shake'>See Git Repo</a> : <></>}

                </div>
            </div>
            <div className={hover === data.id ? "cover hover" : "cover"}>
                <div className={hover === data.id ? "activate" : "deactivate"}>
                    <p className='mediumFont diffTextCol'>{data.name}</p>
                    <p className='projectText'>{data.description}</p>
                </div>
            </div>
        </div>
    });

    return (
        <div className='skills' id='project' ref={ref}>
            <span className='bigFont'>Projects</span>
            <div className='tabContainer'>
                <span variant="pills" /*defaultActiveKey="/home"*/>
                </span>
            </div>
            <div className='skillsList'>
                {project}

                <div className='projectContainer'>
                    <div className={hover === "second" ? "hover projects" : "projects"}>
                        <p className='projectText'>H1 i wanna do the things finish what tro do</p>
                    </div>
                    <div className={hover === "second" ? "hover overlay" : "overlay"}
                        onMouseEnter={() => { HoverStart("second") }} onMouseLeave={() => { HoverEnd() }}>
                        <p>Django</p>
                        <p>SQL</p>
                        <p>XRPL api</p>
                        <p>Blockchain Integration</p>
                        <button className={hover === "second" ? "activate shake" : "deactivate"}>See</button>
                        <a href="http://scicrypt.net/" target="_blank" rel="noopener noreferrer">
                            <button className='shake'>View Project</button>
                        </a>
                        <a href="https://github.com/" target='_blank' className='shake'>See Git Repo</a>
                    </div>
                </div>

            </div>
        </div>
    )
})

export default ProjectsContent;
