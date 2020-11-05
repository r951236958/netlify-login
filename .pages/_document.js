import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
//import { ServerStyleSheets } from '@material-ui/core/styles';
import theme from '../src/theme';

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const styledComponentsSheet = new ServerStyleSheet()
    //const materialSheets = new ServerStyleSheets()

    const originalRenderPage = ctx.renderPage;

    try {
        ctx.renderPage = () => 
          originalRenderPage({
            //enhanceApp: (App) => (props) => styledComponentsSheet.collectStyles(materialSheets.collect(<App {...props} />))
            enhanceApp: (App) => (props) => styledComponentsSheet.collectStyles(<App {...props} />)
            //enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
          })

    const initialProps = await Document.getInitialProps(ctx)
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {styledComponentsSheet.getStyleElement()}
        </>

      ),
    }
  } finally {
    styledComponentsSheet.seal()
  }
}
}