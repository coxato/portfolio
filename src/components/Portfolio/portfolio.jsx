import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
// components
import SectionTitle from '../Titles/sectionTitle';
import ProjectDesktop from './projectDesktop';
import ProjectMobile from './projectMobile';
// data
import { projects } from './myProjects';
// image
import externalIcon from '../../img/external-link.svg';

// style
import './style.css';

const Portfolio = () => {
    const { t } = useTranslation('global');
    const [bodyWidth, setBodyWidth] = useState(document.body.offsetWidth);

    useEffect(() => {
        function handleResize(){
            setBodyWidth(document.body.offsetWidth);
        }

        window.addEventListener('resize', handleResize);
        
        return () => window.removeEventListener('resize', handleResize);
        
    }, []);

    return ( 
        <div id="portfolio">
            <SectionTitle title={t("portfolio.title")} color="#fff"/>
            <div className={`projects-container${bodyWidth >= 550 ? '' : '-mobile'}`}>
                {
                    bodyWidth >= 550 ? (
                        projects.map( p => <ProjectDesktop key={p.name} {...p} /> )
                    ) : (
                        projects.map( p => <ProjectMobile key={p.name} {...p} /> )
                    )
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