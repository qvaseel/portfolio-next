import styles from "../../styles/maintitle.module.css"

interface MainTitleProps {
    children: React.ReactNode;
    data_text: string;
}

const MainTitle = ({children, data_text}: MainTitleProps) =>
    <p className={styles.title} data-text={data_text}>{children}</p>

export default MainTitle;