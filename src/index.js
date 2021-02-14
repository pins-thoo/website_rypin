import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import Loading from 'components/UI/Loading';
import App from 'containers/App';
import configureStore from './store/configureStore';

import './styles/app.css';

const { persistor, store } = configureStore();
const root = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <PersistGate
      loading={<Loading />}
      persistor={persistor}
    >
      <App />
    </PersistGate>
  </Provider>,
  root,
);
