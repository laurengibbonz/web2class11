import React from 'react';

const Project = ({projects}) => {
    return projects.map((project, i) => {
        return (
            <div key={i} className="item">
                <h2>{project.name}</h2>
                <img src={project.img} alt={project.name} />
            </div>
        )
    });
}

export default Project;