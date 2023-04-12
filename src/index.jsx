import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './presentation/App';
import './presentation/styles/global.scss';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.querySelector('.app'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
