import styles from "../../styles/projects.module.css"
import MainTitle from "../MainTitle/MainTitle";
import { useState } from "react";
import ProjectsTabControl from "./ProjectsTabControl";
import ProjectsTabContent from "./ProjectsTabContent";
import { projectItems1, projectItems2, projectItems3, projectItems4 } from "./projectsTabContents";

const Projects = () => {
    const [projectsTab1, setProjectsTab1] = useState(true);
    const [projectsTab2, setProjectsTab2] = useState(false);
    const [projectsTab3, setProjectsTab3] = useState(false);
    const [projectsTab4, setProjectsTab4] = useState(false);

    const handleShowProjectsItems1 = () => {
        setProjectsTab1(true);
        setProjectsTab2(false);
        setProjectsTab3(false);
        setProjectsTab4(false);
    }

    const handleShowProjectsItems2 = () => {
        setProjectsTab1(false);
        setProjectsTab2(true);
        setProjectsTab3(false);
        setProjectsTab4(false);
    }

    const handleShowProjectsItems3 = () => {
        setProjectsTab1(false);
        setProjectsTab2(false);
        setProjectsTab3(true);
        setProjectsTab4(false);
    }

    const handleShowProjectsItems4 = () => {
        setProjectsTab1(false);
        setProjectsTab2(false);
        setProjectsTab3(false);
        setProjectsTab4(true);
    }

    const projectsTabControls = [
        { id: 1, title: 'HTML, CSS', isActive: projectsTab1, handler: handleShowProjectsItems1 },
        { id: 2, title: 'React', isActive: projectsTab2, handler: handleShowProjectsItems2 },
        { id: 3, title: 'Next', isActive: projectsTab3, handler: handleShowProjectsItems3 },
        { id: 4, title: 'Прочее', isActive: projectsTab4, handler: handleShowProjectsItems4 },
    ];

    return (
        <div className={`container ${styles.projects}`} id="projects">
            <div className={styles.container_projects}>
                <MainTitle data_text="my Projects">my Projects</MainTitle>
                <div>
                    <div className={styles.projects_inner}>
                        <ul className={styles.projects_tabs}>
                            {projectsTabControls.map(item => (
                                <ProjectsTabControl
                                    key={item.id}
                                    title={item.title}
                                    isActive={item.isActive}
                                    handleShowTab={item.handler}
                                />
                            ))}
                        </ul>
                    </div>
                    <ul className={styles.projects_list}>
                        {projectsTab1 && <ProjectsTabContent tabItems={projectItems1} />}
                        {projectsTab2 && <ProjectsTabContent tabItems={projectItems2} />}
                        {projectsTab3 && <ProjectsTabContent tabItems={projectItems3} />}
                        {projectsTab4 && <ProjectsTabContent tabItems={projectItems4} />}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Projects;