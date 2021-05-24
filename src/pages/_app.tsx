import React, { useEffect } from 'react';
import { store } from '../stores';
import { Provider } from 'react-redux';
import type { AppProps /*, AppContext */ } from 'next/app';
import Auth from '../components/containment/Auth';
import { StylesProvider } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import '../../styles/sass/reset.scss';
import '../../styles/sass/global.scss';

function MyApp(props: AppProps) {
  const { Component, pageProps } = props;

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      // JavaScript: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Optional_chaining
      // TypeScript: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html
      jssStyles?.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <StylesProvider injectFirst>
      <Provider store={store}>
        <CssBaseline />
        <Auth>
          <Component {...pageProps} />
        </Auth>
      </Provider>
    </StylesProvider>
  );
}

export default MyApp;
