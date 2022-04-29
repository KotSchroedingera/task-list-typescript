import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import './index.scss';
import { Provider } from 'react-redux';
import { persister, store } from './store';
import { PersistGate } from 'redux-persist/es/integration/react';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
