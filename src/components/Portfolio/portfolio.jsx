import React from 'react';
import { useTranslation } from 'react-i18next';
// components
import SectionTitle from '../Titles/sectionTitle';
import Project from './project';
// data
import { projects } from './myProjects';
// image
import externalIcon from '../../img/external-link.svg';

// style
import './style.css';

const Portfolio = () => {
    const { t } = useTranslation('global');

    return ( 
        <div id="portfolio">
            <SectionTitle title={t("portfolio.title")} color="#fff"/>
            <div className="projects-container">
                {
                    projects.map( p => <Project key={p.name} {...p} /> )
                }
            </div>
            <div id="github-projects-link">
                <a href="https://github.com/coxato?tab=repositories&q=&type=source&language=&sort=stargazers" target="_blank" rel="noopener noreferrer">
                    {t("portfolio.github-repos-link")}
                    <img src={externalIcon} alt="carlosedua github"/>
                </a>
            </div>
        </div>
    );
}
 
export default Portfolio;