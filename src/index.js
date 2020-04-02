import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Wrap from './components/Wrap';
// import App from './App';

// import App from './Hooks/01.useState';
// import App from './Hooks/03.useRef';
import App from './Hooks/04.useMemo';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <div style={{ width: 980, margin: '0 auto' }}>
      <Wrap title='React Hooks'>
        <App />
      </Wrap>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
