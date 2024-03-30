import MainTitle from "../MainTitle/MainTitle"
import styles from "../../styles/contacts.module.css"
import ContactForm from "./ContactsForm"
import { socialList } from "./iconsList"
import SocialList from "./SocialList"

const Contacts = () => {

    return (
        <div className={`container ${styles.contacts}`} id="contacts">
            <div className={styles.container_contacts}>
                <MainTitle data_text="my Contacts">my Contacts</MainTitle>
                <div className={styles.container_contacts_content}>
                    <SocialList socialItems={socialList}/>
                    <ContactForm/>
                </div>
            </div>
        </div>
    )
}

export default Contacts;