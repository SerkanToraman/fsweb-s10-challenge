import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { legacy_createStore as createStore, applyMiddleware  } from "redux";
import { Provider } from "react-redux";
import { myReducer } from './reducers';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';


const root = ReactDOM.createRoot(document.getElementById('root'));

const depo = createStore(myReducer,composeWithDevTools(applyMiddleware(thunk,logger)));


root.render(
  <Provider store={depo}>
    <BrowserRouter>
      <>
        <App />
      </>
    </BrowserRouter>
  </Provider>
);
