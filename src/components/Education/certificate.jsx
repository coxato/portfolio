import React from 'react';
import { useTranslation } from 'react-i18next';
// style
import './style.css';

const Certificate = ({name, image, url}) => {
    const { t } = useTranslation('global');

    return (
        <div className="certificate-cont">
            <a href={url}  className="certificate" target="_blank" rel="noopener noreferrer">
                 <img src={image} alt={name} />
                 <div className="certificate-text">
                     {t(`education.certificates.${name}`)}
                 </div>
            </a>
        </div>
    );
}
 
export default Certificate;