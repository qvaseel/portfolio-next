'use client'
import Image from "next/image";
import styles from "../../styles/contacts.module.css"

interface ISocialItem {
    imgUrl: any;
    text: string;
    link: string;
}

const SocialItem = ({ imgUrl, text, link }: ISocialItem) => {
    return (
        <a href={link} className={styles.social_item_link} target="_blank">
            <Image src={imgUrl} alt="socialIcon" className={styles.social_item_icon}/>
            <p className={styles.social_item_text}>{text}</p>
        </a>
    )
};

export default SocialItem;