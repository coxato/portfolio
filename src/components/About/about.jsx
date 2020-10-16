import React from 'react';
import { useTranslation } from 'react-i18next';
// components
import SectionTitle from '../Titles/sectionTitle';
// utils
import { getAge } from '../../utils/dates';
// css
import './about.css';


const About = () => {
    const { t } = useTranslation('global');

    return ( 
        <div id="about">
           <SectionTitle title={t("about-me.title")} />
           <div className="about-description-container">
                <p className="first-letter">
                    {
                        t("about-me.description-a") + ' '
                        + getAge('2018/05/25') + ' '
                        + t("about-me.description-b") + ' '
                        + getAge('1999/05/25') + ' '
                        + t("about-me.description-c")
                    }
                </p>
                <p>{t("about-me.description-d")}</p>
           </div>
        </div>
     );
}
 
export default About;