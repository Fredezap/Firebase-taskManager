import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AppRoutingFinal from './AppRoutingFinal';
import * as ServiceWorkerRegistation from './serviceWorkerRegistration'
import { onServiceWorkerUpdate } from '@3m1/service-worker-updater';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRoutingFinal></AppRoutingFinal>
  </React.StrictMode>
);

ServiceWorkerRegistation.register({
  onUpdate: onServiceWorkerUpdate
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
