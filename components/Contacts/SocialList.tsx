import SocialItem from "./SocialItem";
import styles from "../../styles/contacts.module.css"

interface ISocialList {
    socialItems: {
        img: any;
        text: string;
        link: string;
    }[]
}

const SocialList = ({ socialItems }: ISocialList) => {
    return (
        <div className={styles.social_list}>
        {
            socialItems.map(item =>(
                <SocialItem
                    imgUrl={item.img}
                    text={item.text}
                    link={item.link}/>
            ))
        }
        </div>
    )
}

export default SocialList;