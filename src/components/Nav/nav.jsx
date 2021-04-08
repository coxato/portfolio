import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SmoothScroll from 'smooth-scroll';
// components
import ChangeLanguage from './changeLanguage';
// images
import menuSVG from '../../img/menu.svg';
import closeSVG from '../../img/close.svg';
import myLogo from '../../img/mylogo.svg';
// style
import './nav.css';

const Nav = () => {
    const { t } = useTranslation('global');
    const [menuOpen, setMenuOpen] = useState(false);

    // smooth scroll
    const scrollTo = target => {
        const scroll = new SmoothScroll();
        let anchor;
        if(target.tagName === 'DIV') anchor = target.querySelector('a');
        else if(target.tagName === 'A') anchor = target;

        if(anchor){
            const id = anchor.hash.replace('#', '');
            const elmt = document.getElementById(id);
            if(elmt) scroll.animateScroll(elmt);
        }
    }

    // show and hide menu, also handle caller for smooth-scroll
    const showMenu = (ev) => {
        const menu = document.getElementById('nav-center');
        menuOpen ? menu.classList.remove('active') : menu.classList.add('active');
        setMenuOpen(!menuOpen); 
        scrollTo(ev.target);
    }

    return (
        <div id="nav-container">

            <div id="myLogo-nav">
                <img src={myLogo} alt="Carlos Martinez logo"/>
            </div>

            <div className="hamburguer" onClick={showMenu}>
                <img src={menuSVG} alt="hamburguer Carlos Martinez"/>
            </div>

            <div id="nav-center">
                <div className="close" onClick={showMenu}>
                    <img src={closeSVG} alt="close Carlos Martinez"/>
                </div>

                <div className="nav-link" onClick={showMenu}>
                    <a data-scroll href="#about">{t("nav.about")}</a>
                </div>
                {/* <div className="nav-link" onClick={showMenu}>
                    <a data-scroll href="#skills" >{t("nav.skills")}</a>
                </div> */}
                <div className="nav-link" onClick={showMenu}>
                    <a data-scroll href="#portfolio">{t("nav.portfolio")}</a>
                </div>
                <div className="nav-link" onClick={showMenu}>
                    <a data-scroll href="#education">{t("nav.education")}</a>
                </div>
                <div className="nav-link" onClick={showMenu}>
                    <a data-scroll href="#contact">{t("nav.contact")}</a>
                </div>
            </div>

            <ChangeLanguage />
        </div>
    );
}
 
export default Nav;