import React from 'react';
import './titles.css';

const SubTitle = ({ title, borderBottomColor = '#ffbf00'}) => {
    return (
        <div 
            className="subtitle-container" 
        >
            <h3 style={{borderBottomColor}}>{title}</h3>
        </div>
    );
}
 
export default SubTitle;