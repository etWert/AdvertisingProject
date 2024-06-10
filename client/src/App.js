import Axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import AdvertismentList from './ad/AdvertismentList';
import { useState } from 'react';

function App() {

  return (
    <div className="App">
      <h1>כאן תוכלו לפרסם את העסק שלכם</h1>
      <div className="list">
        <AdvertismentList />
      </div>
    </div>
  );
}

export default App;
