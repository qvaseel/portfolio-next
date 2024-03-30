import { MutableRefObject, useRef, useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import { PropagateLoader } from "react-spinners";
import ContactsInput from "./ContactsInput";
import emailjs from '@emailjs/browser';
import styles from '../../styles/contacts.module.css'

const ContactForm = () => {
    const [acceptWithRules, setAcceptWithRules] = useState(false);
    const [spinner, setSpinner] = useState(false);
    const formRef = useRef() as MutableRefObject<HTMLFormElement>;

    const toggleAcceptWithRules = () => setAcceptWithRules(!acceptWithRules);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setSpinner(true);
        emailjs.sendForm('service_s6p30gq', 'template_qv3kfac', formRef.current, 'iIsVn8rtWajnnw_4n')
        .then(result => {
            setSpinner(false);
            toast(`Данные отправлены ${result.text}`);
        }, error => {
            setSpinner(false);
            toast.error(`Данные отправлены ${error.text}`);
        })

        formRef.current.reset();
        setAcceptWithRules(false);
    }

    return (
        <form onSubmit={sendEmail} className={styles.contact_form} ref={formRef}>
            <ContactsInput
                text="Имя*"
                placeholder="Укажите ваше имя"
                type="text"
                name='fullName'
            />
            <ContactsInput
                text="email*"
                placeholder="Укажите ваш email"
                type="email"
                name='email'
            />
            <ContactsInput
                text="Соц. сеть*"
                placeholder="Укажите ссылку на любую из ваших соцсетей"
                type="text"
                name='soccet'
            />
            <button
                className={styles.contact_form_btn}
                disabled={!acceptWithRules}
            >
                {spinner ? <PropagateLoader color="#fff" /> : 'Отправить заявку'}
            </button>
            <label className={styles.contact_checkbox}>
                <input
                    className={styles.contact_checkbox_input}
                    type="checkbox"
                    onChange={toggleAcceptWithRules}
                />
                <span className={styles.contact_checkbox_span} />
                <span className={styles.contact_checkbox_text}>Нажимая на кнопку «Отправить заявку», я даю согласие на обработку персональных данных.</span>
            </label>
        </form>
    );
}

export default ContactForm;