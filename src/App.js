import { useEffect, useState } from 'react';
import './App.css';
// import axios from 'axios';
import Main from './route/Main';
import Coin_Info from './route/Coin_Info';
import { HashRouter, Route } from "react-router-dom"


const App = () => {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Main} />
      <Route path="/:market" component={Coin_Info} />
    </HashRouter>
  )
}

export default App;
