import React from "react"

const ProjectDescription = (props) => {
    const {name, description, url} = props.project;
    return (
        <div className="project-description">
            <div className="description">
                <h1>{name}</h1>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ProjectDescription;