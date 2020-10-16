import React from 'react';
import { render } from 'react-dom';
import App from './app/app';
import './translations/i18n'

render(
    <App />, 
    document.getElementById('root')
);

