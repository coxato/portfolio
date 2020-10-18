import React from 'react';
import './style.css';

const Technologies = ({ technologies }) => {
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
 
export default Technologies;