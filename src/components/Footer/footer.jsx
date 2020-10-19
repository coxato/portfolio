import React from 'react';
// images
import githubImg from '../../img/github-white.png';
import instagramImg from '../../img/instagram-white.png';
import twitterImg from '../../img/twitter-white.png';

import './style.css';

const Footer = () => {
    return (
        <div id="footer">
            <div id="copyright">
                &copy; {new Date().getFullYear()} Carlos Martínez
            </div>
            <div className="footer-social">
                <a href="https://github.com/carlosEdua" target="_blank" rel="noopener noreferrer">
                    <img src={githubImg} alt="carlos martinez github"/>
                </a>
                <a href="https://www.instagram.com/coxato/" target="_blank" rel="noopener noreferrer">
                    <img src={instagramImg} alt="carlos martinez instagram"/>
                </a>
                <a href="https://twitter.com/Carlos40947924" target="_blank" rel="noopener noreferrer">
                    <img src={twitterImg} alt="carlos martinez twitter"/>
                </a>
            </div>
        </div>
    );
}
 
export default Footer;