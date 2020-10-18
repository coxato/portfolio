import React from 'react';
import { useTranslation } from 'react-i18next';
import Technologies from './technologies'
import './style.css';

const Project = ({ name, photo, url, technologies }) => {
    const { t } = useTranslation('global');

    return ( 
        <div className="project">
            <img className="project-image" src={photo} alt={name}/>

            <div className="project-overlay">
                <a className="project-link" href={url} target="_blank" rel="noopener noreferrer">
                    <div className="project-text">
                        <h2 className="project-title">{name}</h2>
                        <div className="project-description">
                            {t(`portfolio.descriptions.${name}`)}
                        </div>
                    </div>
                    <Technologies technologies={technologies} />
                </a>    
            </div>
        </div>
    );
}
 
export default Project;