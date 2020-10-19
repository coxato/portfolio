import React from 'react';
import { useTranslation } from 'react-i18next';
// components
import SectionTitle from '../Titles/sectionTitle';
import Subtitle from '../Titles/subtitle';
import Certificate from './certificate';
// data
import { certificates } from './myCertificates'
// style
import './style.css';

const Education = () => {
    const { t } = useTranslation('global');

    return(
        <div id="education">
            <SectionTitle title={t("education.title")} />
            <div className="education-container">
                <div className="education-text">
                    <p className="edu-p p1">{t("education.description-a")}</p>
                    <p className="edu-p p2">{t("education.description-b")}</p>
                </div>
                
                <div id="subtitle-education">
                    <Subtitle title={t("education.subtitle")} />
                </div>

                <div className="certificates-container">
                    {
                        certificates.map( cert => <Certificate key={cert.name} {...cert} /> )
                    }
                </div>
            </div>
        </div>
    )
}

export default Education;
