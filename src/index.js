import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";
 


ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <Suspense fallback={'Conectando la app...'}>
      <App />
    </Suspense>
  </React.StrictMode>
</BrowserRouter>
,
document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
