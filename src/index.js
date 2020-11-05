import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import netlifyIdentity from 'netlify-identity-widget';

window.netlifyIdentity = netlifyIdentity;
// You must run this once before trying to interact with the widget
netlifyIdentity.init();

ReactDOM.render(
    <ThemeProvider theme={theme}>
       {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <App /> 
    </ThemeProvider>,
    document.querySelector('#root'),
    );
// registerServiceWorker();