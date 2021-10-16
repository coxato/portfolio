import React from 'react';
import { useTranslation } from 'react-i18next';
import './style.css';

function separateByComma(technologies) {
    let names = technologies.map( t => t.name );
    names = names.join(', ');
    return names;
}

const TechnologiesDesktop = ({ technologies }) => {
    return (
        <div className="technologies-container">
            {
                technologies.map(({name, logo, logoSize}) => (
                    <div className="technologie" key={name} title={name}>
                        <img src={logo} alt={name} style={{width: logoSize+'px'}}/>
                    </div>                    
                ))
            }
        </div> 
    );
}

const TechnologiesMobile = ({ technologies }) => {
    const { t } = useTranslation('global')

    return (
        <div className="technologies-container-mobile">
            <div className="technologies-mobile-row">
                {t('portfolio.madeWith') + ': '}
                {separateByComma(technologies)}
            </div>
        </div> 
    );
}
 
export {
    TechnologiesDesktop,
    TechnologiesMobile
};