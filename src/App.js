import React from 'react';
import Navbar from './components/navbar.js';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Photos from './pages/photos';
import Testimonials from './pages/testimonials';
import AboutMe from './pages/aboutMe';
import BuyNow from './pages/buyNow';
import Aliens from './pages/aliens';

function App() {
  return (
    <>
      <Navbar/>
      <main>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/photos'>
            <Photos/>
          </Route>
          <Route path='/testimonials'>
            <Testimonials/>
          </Route>
          <Route path='/about-me'>
            <AboutMe/>
          </Route>
          <Route path='/aliens'>
            <Aliens/>
          </Route>
          <Route path='/buy-now'>
            <BuyNow/>
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
