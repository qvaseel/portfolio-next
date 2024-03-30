import AwardsList from "./AwardsList";
import MainTitle from "../MainTitle/MainTitle";
import { awardsImages } from "./awardsImages"
import styles from "../../styles/awards.module.css"

const Awards = () => (
    <div className={`container ${styles.awards}`} id="awards">
        <div className={styles.container_awards}>
            <MainTitle data_text="my Awards">my Awards</MainTitle>
            <AwardsList awardsItems={awardsImages}/>
        </div>
    </div>
);

export default Awards;