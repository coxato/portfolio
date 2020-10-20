import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
// components
import SectionTitle from '../Titles/sectionTitle';
import ContactForm from './contactForm';
import { 
    showSuccessMessage, 
    showErrorMessage, 
    showWarningMessage 
} from '../../utils/sweetAlert';
// style
import './styles.css';

const Contact = () => {
    const { t } = useTranslation('global');
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        name: '',
        email: '',
        message: ''
    });


    const handleSubmit = async (ev) => {
        ev.preventDefault();

        // simple validation
        for(let value of Object.values(data)){
            if(value === ""){
                showWarningMessage({ title: '', text: t("contact.alerts.warning") });
                return;
            }
        }
        setLoading(true);

        // send data to formspree
        try {
            const response = await fetch('https://formspree.io/f/xzbkengp', {
                method: 'POST',
                headers: {
                    "Accept": "application/json"
                },
                body: JSON.stringify(data)
            });
            const json = await response.json();
            setLoading(false);
            // all ok reset state, not 'ok' show error alert
            if(json.ok){
                showSuccessMessage({ title: t("contact.alerts.success") });
                setData({
                    name: '',
                    email: '',
                    message: ''
                });
            }
            else showErrorMessage({ title: '', text: t("contact.alerts.error") });

        } catch (error) {
            setLoading(false);
            console.log('error sending email', error);
            showErrorMessage({ title: '', text: t("contact.alerts.error") });
        }
    }

    const handleChange = ({target: { name, value }}) => {
        setData({
            ...data,
            [name]: value
        })
    }

    return ( 
        <div id="contact">
            <SectionTitle title={t("contact.title")} borderBottomColor="#fff" />
            <div className="contact-form-container">
                <ContactForm
                    {...{
                        handleSubmit,
                        handleChange,
                        data,
                        loading
                    }}
                />
            </div>
        </div>
    );
}
 
export default Contact;