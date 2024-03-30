import styles from "../../styles/about.module.css"
import Image from "next/image";
import face from "../../public/img/face.png"

const About = () => {
    return (
        <div className={`container ${styles.about}`} id="about">
            <div className={styles.container_about}>
                <div className={`${styles.face} ${styles.glitch}`}>
                    <Image className={styles.about_img} src={face} alt="" />
                    <div className={styles.glitch__layers}>
                        <div className={styles.glitch__layer}></div>
                        <div className={styles.glitch__layer}></div>
                        <div className={styles.glitch__layer}></div>
                    </div>
                </div>
                <div className={styles.notepad}>
                    <p>Приветствую!<br/>Я Василина – студентка колледжа по направлению «Информационные системы и программирование»</p>
                </div>
            </div>
        </div>
    )
}

export default About;