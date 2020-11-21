import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import SmoothScroll from 'smooth-scroll';
import 'particles.js/particles';
// images
import githubImg from '../../img/github.png';
import instagramImg from '../../img/instagram.svg';
import twitterImg from '../../img/twitter.svg';
import linkedinImg from '../../img/linkedin.svg';
// css
import './hero.css';

const particlesJS = window.particlesJS;

const Hero = () => {
    const { t } = useTranslation('global');

    const handleScroll = () => {
        const scroll = new SmoothScroll(),
        elmt = document.getElementById('about');
        scroll.animateScroll(elmt);
    }

    useEffect(() => {
        const jsonPath = window.innerWidth <= 800 ? './particlesjs-mobile-config.json' : './particlesjs-config.json'; 
        particlesJS.load('hero-container', jsonPath);
    }, []);

    return ( 
        <div id="hero-container">
            <div className="hero-text">
                <h1 className="hero-title">Carlos Martínez</h1>
                <div className="hero-description">{t('hero.description')}</div>
                <div className="social-container">
                    <div className="social-item">
                        <a href="https://github.com/carlosEdua" target="_blank" rel="noopener noreferrer">
                            <img src={githubImg} alt="carlos martinez github"/>
                        </a>
                    </div>
                    <div className="social-item">
                        <a href="https://www.instagram.com/coxato/" target="_blank" rel="noopener noreferrer">
                            <img src={instagramImg} alt="carlos martinez instagram"/>
                        </a>
                    </div>
                    <div className="social-item">
                        <a href="https://twitter.com/CarlosCoxato" target="_blank" rel="noopener noreferrer">
                            <img src={twitterImg} alt="carlos martinez twitter"/>
                        </a>
                    </div>
                    <div className="social-item">
                        <a href="https://www.linkedin.com/in/carloscoxato" target="_blank" rel="noopener noreferrer">
                            <img src={linkedinImg} alt="carlos martinez linkedin"/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="hero-button-container">
                <button onClick={handleScroll} className="learn-more-button">{t('hero.learn-more')}</button>
            </div>
        </div>
     );
}
 
export default Hero;