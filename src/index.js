import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from './app/store';

const render = () => {
  ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
  );
};

render();

store.subscribe(render);