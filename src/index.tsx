import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/style.css';
import App from './components/App.tsx';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

