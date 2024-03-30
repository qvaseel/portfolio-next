import { motion } from "framer-motion";
import styles from "../../styles/projects.module.css"
import ProjectsTabItem from "./ProjectsTabItem";

interface IProjectsTabContent {
    tabItems: {
        id: number;
        img: any;
        link: string;
        title: string;
    }[]
}

const ProjectsTabContent = ({ tabItems }: IProjectsTabContent) => (
    <>
        {tabItems.map(item => (
            <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key={item.id}
                className={styles.projects_list_item}
            >
                <ProjectsTabItem title={item.title} imgSrc={item.img} link={item.link} />
            </motion.li>
        ))}
    </>
);

export default ProjectsTabContent