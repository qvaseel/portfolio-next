import styles from  '../../styles/projects.module.css';

interface IProjectsSliderItem {
    title: string; 
    imgSrc: string;
    link: string;
}

const ProjectsSliderItem = ({ title, imgSrc, link }: IProjectsSliderItem) => (
    <div className={styles.projects_slide}>
        <a className={styles.projects_slide_link} href={link}>
            <span className={styles.projects_slide_inner}>
                <span className={styles.projects_slide_text}>{title}</span>
            </span>
            <img className={styles.projects_slide_img} src={imgSrc} alt={title} />
        </a>
    </div>
);

export default ProjectsSliderItem;