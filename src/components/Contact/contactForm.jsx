import React from 'react';
import ButtonWithLoader from './loadingButton';
import { useTranslation } from 'react-i18next';
import './styles.css';

const ContactForm = ({ handleChange, handleSubmit, data, loading }) => {
    const { t } = useTranslation('global');
    const { name, email, message } = data;

    return (
        <div id="contact-form">
            <form autoComplete="off" onSubmit={() => false}>
                <div className="field">
                    <label htmlFor="name">{t("contact.form.name")}</label>
                    <input 
                        type="text" 
                        required 
                        name="name" 
                        placeholder={t("contact.form.name-placeholder")} 
                        value={name || ''}
                        onChange={handleChange}
                        autoComplete="off"
                    />
                </div>
                <div className="field">
                    <label htmlFor="email">{t("contact.form.email")}</label>
                    <input 
                        type="email" 
                        required 
                        name="email" 
                        placeholder={t("contact.form.email-placeholder")}
                        value={email || ''} 
                        onChange={handleChange}
                        autoComplete="off"
                    />
                </div>
                <div className="field">
                    <label htmlFor="name">{t("contact.form.message")}</label>
                    <textarea 
                        name="message" 
                        required
                        id="message"
                        placeholder={t("contact.form.message-placeholder")}
                        value={message || ''}
                        onChange={handleChange}
                        minLength="15"
                        autoComplete="off"
                    />

                </div>
                <ButtonWithLoader 
                    type="submit"
                    text={t("contact.form.send")}
                    onClick={handleSubmit}
                    loading={loading}  
                />
            </form>
        </div>
    );
}
 
export default ContactForm;