import React from 'react';
import { useTranslation } from 'react-i18next';
import { TechnologiesMobile } from './technologies'
// images
import globeIcon from '../../img/globe-icon.svg';
import githubIcon from '../../img/github.svg';
import playStoreIcon from '../../img/playStore.svg';
// style
import './style.css';

const ProjectDesktop = ({ name, photo, url, code, playStoreLink, technologies }) => {
    const { t } = useTranslation('global');

    return ( 
        <div className="project-mobile">

            <h1 className="project-mobile-title">{name}</h1>

            <img className="project-image-mobile" src={photo} alt={name}/>

            <div className="project-buttons">
                {
                    url && (
                        <a href={url} className="btn-live" target="_blank" rel="noopener noreferrer">
                            {t('portfolio.buttons.live')}
                            <img src={globeIcon} alt="project online"/>
                        </a>
                    )
                }
                {
                    code && (
                        <a href={code} className="btn-code" target="_blank" rel="noopener noreferrer">
                            {t('portfolio.buttons.code')}
                            <img src={githubIcon} alt="project github online"/>
                        </a>
                    )
                }
                {
                    playStoreLink && (
                        <a href={playStoreLink} className="btn-play-store" target="_blank" rel="noopener noreferrer">
                            Play Store
                            <img src={playStoreIcon} alt="project play store"/>
                        </a>
                    )
                }
            </div>
            <div className="project-mobile-description">
                {t(`portfolio.descriptions.${name}`)}
            </div>

            <TechnologiesMobile technologies={technologies} />

        </div>
    );
}
 
export default ProjectDesktop;