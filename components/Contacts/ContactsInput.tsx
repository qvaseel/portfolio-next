import styles from "../../styles/contacts.module.css"

interface IContactsInput {
    type: string;
    text: string;
    placeholder: string;
    name: string;
}

const ContactsInput = ({ type, text, placeholder, name }: IContactsInput) => (
    <label className={styles.contact_form_label}>
        <span className={styles.contact_form_label_text}>{text}</span>
        <input
            className={styles.contact_form_label_input}
            type={type}
            placeholder={placeholder}
            name={name}
            required
        />
    </label>
);

export default ContactsInput;