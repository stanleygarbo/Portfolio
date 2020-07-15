import React from 'react'
import folder from '../icons/folder.svg'

const Project = ({projectTitle,projectImage,projectDescription,techs,links}) => {
    return (
        <div className='project'>
            <div className='project-header'>
                <div className='project-title'>
                    <h2>
                        {projectTitle}
                    </h2>
                    <img className='folder-icon' src={folder} alt='folder icon' width='20px' height='20px'></img>
                </div>
                <img className='project-image' alt='project' src={projectImage}></img>
                <div className='filter'></div>
            </div>
            <p>
                {projectDescription}
            </p>
            <div className='technologies'>
                {techs && techs.map((tech,index)=>
                    <div key={index} className='tech'>
                        <img src={tech.icon} alt={tech.name}></img>
                        <pre>{tech.name}</pre>
                    </div>
                )}
                <div className='links'>
                    {links && links.map((link,index)=>
                        <a key={index} target='blank' href={link.url}>
                            <img id='icon' src={link.icon} alt={link.url}></img>
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Project
