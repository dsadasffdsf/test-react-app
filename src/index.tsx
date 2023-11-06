import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/style.css';
import App from './components/App.tsx';
import { store } from './redux/store';
import { Provider } from 'react-redux';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
}
