import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
import LifeBox from "./components/LifeBox";
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <LifeBox />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
