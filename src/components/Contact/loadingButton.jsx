import React from 'react';
import Loader from '../Loader/loader';
import './styles.css';

const ButtonWithLoader = ({ text, loading, onClick, type = "submit" }) => {
    return (
        <div className="button-with-loader">
            <button onClick={onClick} type={type}>
                {
                    loading ? <Loader /> : text
                }
            </button>
        </div>
    );
}
 
export default ButtonWithLoader;