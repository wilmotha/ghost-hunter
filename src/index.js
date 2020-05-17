import React from 'react';
import { Global, css } from '@emotion/core';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './utils/serviceWorker';

const globalStyles = css`
  ${'' /* @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet'); */}
  body {
    margin: 0;
    padding: 0;
    ${'' /* font-family: 'Open Sans', sans-serif; */}
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <Global styles={globalStyles} />
        <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
