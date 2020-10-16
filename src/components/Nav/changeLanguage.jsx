import React from 'react';
import { useTranslation } from 'react-i18next';
import EnglishSVG from '../../img/english.svg'; 
import SpanishSVG from '../../img/spanish.svg'; 
import './changeLanguage.css';

const ChangeLanguage = () => {
    const { t, i18n } = useTranslation('global');
    
    const changeLanguage = () => {
        const lng = i18n.language === 'en' ? 'es' : 'en';
        i18n.changeLanguage(lng);
        localStorage.setItem('language', lng);
    }

    return (
        <div className="language-flat-container" title={t("nav.language")} >
            <img 
                onClick={changeLanguage}
                src={ i18n.language === 'es' ? EnglishSVG : SpanishSVG } 
                alt="portfolio language"/>
        </div>
    );
}
 
export default ChangeLanguage;