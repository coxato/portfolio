import React from 'react';
import './titles.css';

const SectionTitle = ({ title, borderBottomColor = '#ffbf00'}) => {
    return (
        <div 
            className="section-title-container" 
            style={{borderBottomColor}}
        >
            <h1>{title}</h1>
        </div>
    );
}
 
export default SectionTitle;