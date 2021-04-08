import React from 'react';
// images
import githubImg from '../../img/github-white.png';
import instagramImg from '../../img/instagram-white.png';
import twitterImg from '../../img/twitter-white.png';
import linkedinImg from '../../img/linkedin-white.png';
import myLogo from '../../img/mylogo.svg';

import './style.css';

const Footer = () => {
    return (
        <div id="footer">
            <div id="copyright">
                <img id="myLogo-footer" src={myLogo} alt="carlos martinez logo "/>
                <p>&copy; {new Date().getFullYear()} Carlos Martínez</p>
            </div>
            <div className="footer-social">
                <a href="https://github.com/coxato" target="_blank" rel="noopener noreferrer">
                    <img src={githubImg} alt="carlos martinez github"/>
                </a>
                <a href="https://www.instagram.com/coxato/" target="_blank" rel="noopener noreferrer">
                    <img src={instagramImg} alt="carlos martinez instagram"/>
                </a>
                <a href="https://twitter.com/CarlosCoxato" target="_blank" rel="noopener noreferrer">
                    <img src={twitterImg} alt="carlos martinez twitter"/>
                </a>
                <a href="https://www.linkedin.com/in/coxato" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinImg} alt="carlos martinez linkedin"/>
                </a>
            </div>
        </div>
    );
}
 
export default Footer;