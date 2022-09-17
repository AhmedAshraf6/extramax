import React from 'react';
import ReactDOM from 'react-dom/client';
import 'swiper/css/bundle';
import './style.scss';
import 'bootstrap/dist/js/bootstrap';
import App from './App';
import LangugeContextApi from './contexts/LangugeContextApi';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <LangugeContextApi>
      <App />
    </LangugeContextApi>
  </React.StrictMode>
);
