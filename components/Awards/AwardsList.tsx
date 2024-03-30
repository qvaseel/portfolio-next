import AwardsItem from "./AwardsItem"
import styles from "../../styles/awards.module.css"

interface IAwardsList {
    awardsItems: {
        img: any;
    }[]
}

const AwardsList = ({ awardsItems }: IAwardsList) => {
    return (
        <div className={styles.awards_list}>
        {
            awardsItems.map(item =>(
                <AwardsItem imgUrl={item.img}/>
            ))
        }
        </div>
    )
}

export default AwardsList;