import React from 'react';
import ReactDOM from 'react-dom/client';

import Routes from './routes';
import GlobalStyles from './Styles/globalStyles';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
    <>
        <Routes />
        <GlobalStyles />
    </>
)
