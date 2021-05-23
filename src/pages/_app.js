import { store } from '../stores';
import { Provider } from 'react-redux';
import Auth from '../components/containment/Auth';
import { StylesProvider } from '@material-ui/core/styles';
import '../../styles/sass/reset.scss';
import '../../styles/sass/global.scss';

function MyApp({ Component, pageProps }) {
  return (
    <StylesProvider injectFirst>
      <Provider store={store}>
        <Auth>
          <Component {...pageProps} />
        </Auth>
      </Provider>
    </StylesProvider>
  );
}

export default MyApp;
