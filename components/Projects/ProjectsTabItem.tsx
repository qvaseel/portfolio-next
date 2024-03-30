import styles from '../../styles/projects.module.css';
import Image from 'next/image';

interface IProjectsTabItem {
    title: string; 
    imgSrc: any;
    link: string;
}

const ProjectsTabItem = ({ title, imgSrc, link }: IProjectsTabItem) => (
    <div className={styles.projects_list_inner}>
        <a className={styles.projects_list_item_link} href={link} target='_blank'>
            <Image className={styles.projects_list_item_img} src={imgSrc} width={544} height={422} alt={title} />
            <p className={styles.projects_list_item_title}>{title}</p>
        </a>
    </div>
);

export default ProjectsTabItem;