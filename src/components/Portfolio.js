import React from "react"
import ProjectDescription from "./ProjectDescription";
import Tenzies from "./Tenzies/Tenzies";
import Scoreboard from "./Scoreboard/Scoreboard";
import { nanoid } from "nanoid";
import projectData from "../data/data.json"

const Portfolio = (props) => {
    const projectsList = projectData.projects.map(project => {
        const id = nanoid();
        return {...project, id: id}
    })

    return (
        <main>
            <section>
                <div className="project-wrapper"><Scoreboard /></div>
                <div className="description-wrapper"><ProjectDescription key={projectsList[1].id} project={projectsList[1]}/></div>
            </section>
            <section>
                <div className="project-wrapper"><Tenzies /></div>
                <div className="description-wrapper"><ProjectDescription key={projectsList[0].id} project={projectsList[0]}/></div>
            </section>
        </main>
    )
}

export default Portfolio;