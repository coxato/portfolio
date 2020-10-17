import React from 'react';
import { useTranslation } from 'react-i18next';
// components
import SectionTitle from '../Titles/sectionTitle';
import SubTitle from '../Titles/subtitle';
import Skill from './skill';
// data
import { mySkills } from './mySkills';
// css
import './skills.css';


const Hero = () => {
    const { t } = useTranslation('global');

    return ( 
        <div id="skills">
            <SectionTitle title={t("skills.title")} borderBottomColor="#eaf2ef" />

            <div className="skills-container">
                {
                    Object.keys(mySkills).map( skillType => (
                        <div className={`skills-type skills-${skillType}`} key={skillType}>
                        <SubTitle title={t(`skills.${skillType}`)}/>
                            
                            {/* each skill of a kind */}
                            {
                                mySkills[skillType].map( skill => (
                                        <Skill {...skill} key={skill.name} />
                                    ) 
                                )
                            }
                        </div>
                    ))
                }
            </div>
        </div>
     );
}
 
export default Hero;