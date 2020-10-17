import React from 'react';
import './skills.css';

const Skill = ({ name, image, percentage, imageWidth}) => {
    return (
        <div className="skill">
            <div className="skill-imageAndName">
                <img 
                    src={image} 
                    className="skill-image" 
                    alt="skill carlos"
                    style={{width: imageWidth+'px'}}
                />
                <p className="skill-name">
                    {name}
                </p>
            </div>
            <div className="skill-percentage-container">
                <progress value={percentage} max="100" className="skill-percentage" />
            </div>
        </div>
    );
}
 
export default Skill;