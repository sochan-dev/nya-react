import '../../styles/globals.css';
import { store } from '../stores';
import { Provider } from 'react-redux';
import Auth from '../components/containment/Auth';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Auth>
        <Component {...pageProps} />
      </Auth>
    </Provider>
  );
}

export default MyApp;
