import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Provider } from "react-redux";
import store from "./redux/store/store";
import "./assets/css/style.css"
import './assets/css/sidebar.css'
import './assets/css/progress.css'
import './assets/css/dropdownmenu.css'
import './assets/css/animate.min.css'
import './assets/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);