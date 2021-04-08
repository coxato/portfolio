import React from 'react';
import { useTranslation } from 'react-i18next';
import Technologies from './technologies'
// images
import globeIcon from '../../img/globe-icon.svg';
import githubIcon from '../../img/github.svg';
// style
import './style.css';

const Project = ({ name, photo, url, code, technologies }) => {
    const { t } = useTranslation('global');

    return ( 
        <div className="project">
            <img className="project-image" src={photo} alt={name}/>

            <div className="project-overlay">
                <div className="overlay-child">
                    <div className="project-text">
                        <h2 className="project-title">{name}</h2>
                        <div className="project-description">
                            {t(`portfolio.descriptions.${name}`)}
                        </div>
                    </div>

                    <div className="project-buttons">
                        <a href={url} className="btn-live" target="_blank" rel="noopener noreferrer">
                            {t('portfolio.buttons.live')}
                            <img src={globeIcon} alt="project online"/>
                        </a>
                        <a href={code} className="btn-code" target="_blank" rel="noopener noreferrer">
                            {t('portfolio.buttons.code')}
                            <img src={githubIcon} alt="project github online"/>
                        </a>
                    </div>

                    <Technologies technologies={technologies} />
                </div>    
            </div>
        </div>
    );
}
 
export default Project;