import { useEffect, useState } from 'react';
import './App.css';
// import axios from 'axios';
import Main from './route/Main';
import { HashRouter, Route } from "react-router-dom"


const App = () => {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Main} />
    </HashRouter>
  )
}

export default App;
