import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './elements/navbar.js';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home';

function App() {
  return (
    <body>
      <Navbar/>
      <main>
        <Switch>
          <Route path='/'>
            <Home/>
          </Route>
        </Switch>
      </main>
    </body>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
