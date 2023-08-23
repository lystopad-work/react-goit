import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {persistore, store} from "./store";
import {PersistGate} from "redux-persist/integration/react";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Provider store={store}>
       <PersistGate loading={null} persistor={persistore}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
       </PersistGate>
   </Provider>
  </React.StrictMode>
);

