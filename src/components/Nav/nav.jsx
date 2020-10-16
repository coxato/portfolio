import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
// components
import ChangeLanguage from './changeLanguage';
// images
import menuSVG from '../../img/menu.svg';
import closeSVG from '../../img/close.svg';
// style
import './nav.css';

const Nav = () => {
    const { t } = useTranslation('global');
    const [menuOpen, setMenuOpen] = useState(false);

    const showMenu = () => {
        const menu = document.getElementById('nav-center');
        menuOpen ? menu.classList.remove('active') : menu.classList.add('active');
        setMenuOpen(!menuOpen); 
    }

    return (
        <div id="nav-container">
            <div className="hamburguer" onClick={showMenu}>
                <img src={menuSVG} alt="hamburguer Carlos Martinez"/>
            </div>

            <div id="nav-center">
                <div className="close" onClick={showMenu}>
                    <img src={closeSVG} alt="close Carlos Martinez"/>
                </div>

                <div className="nav-link" onClick={showMenu}>
                    <a href="/">{t("nav.about")}</a>
                </div>
                <div className="nav-link" onClick={showMenu}>
                    <a href="/">{t("nav.skills")}</a>
                </div>
                <div className="nav-link" onClick={showMenu}>
                    <a href="/">{t("nav.portfolio")}</a>
                </div>
                <div className="nav-link" onClick={showMenu}>
                    <a href="/">{t("nav.education")}</a>
                </div>
                <div className="nav-link" onClick={showMenu}>
                    <a href="/">{t("nav.contact")}</a>
                </div>
            </div>

            <ChangeLanguage />
        </div>
    );
}
 
export default Nav;