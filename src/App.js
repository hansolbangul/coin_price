import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

// import axios from 'axios';
import Main from './route/Main';
import { HashRouter, Route } from "react-router-dom"


const App = () => {
  return (
    <HashRouter>
      <div>
        <Header />
        <div>
          <Route path="/" exact={true} component={Main} />
        </div>
        <Footer />
      </div>
      {/* <Route path="/:market" component={Coin_Info} /> */}
    </HashRouter>
  )
}

export default App;
