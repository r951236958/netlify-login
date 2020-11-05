//import '../src/index.css';
import theme from '../src/theme';
import useScript from '../src/useScript'

import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createGlobalStyle } from 'styled-components';

import Head from 'next/head';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`

//export default function MyApp({ Component, pageProps }) {
//  return (
//    <React.Fragment>
//      <Head>
//        <link rel="icon" href="/favicon-32x32.png" />
//      </Head>
//      
//      <Component {...pageProps} />
//    </React.Fragment>
//    
//  )
//}

export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {

    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    
    <React.Fragment>
      <Head>
      <title>My page</title>
        {/* Use minimum-scale=1 to enable GPU rasterization */}
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <ThemeProvider theme={theme}>
        
        <CssBaseline />
        
        <Component {...pageProps} />
        
      </ThemeProvider>
      
    </React.Fragment>

  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

