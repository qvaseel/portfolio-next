import styles from '../../styles/projects.module.css';

interface IProjectsTabControl {
    title: string;
    isActive: boolean;
    handleShowTab: () => void;
}

const ProjectsTabControl = ({ title, isActive, handleShowTab }: IProjectsTabControl) => {
    return (
        <li className={styles.projects_tabs_item}>
            <button className={isActive ? `${styles.projects_tabs_item_btn} ${styles.active}` : styles.projects_tabs_item_btn} onClick={handleShowTab}>
                {title}
            </button>
        </li>
    );
}

export default ProjectsTabControl;