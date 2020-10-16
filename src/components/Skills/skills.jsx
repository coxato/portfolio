import React from 'react';
import { useTranslation } from 'react-i18next';
// components
import SectionTitle from '../Titles/sectionTitle';
// images
// import { lngLogo } from '../../utils/imagesDict';
// css
import './skills.css';


const Hero = () => {
    const { t } = useTranslation('global');

    return ( 
        <div id="skills">
            <SectionTitle title={t("skills.title")} borderBottomColor="#eaf2ef" />
        </div>
     );
}
 
export default Hero;