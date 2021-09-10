import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Firsta from "./components/Firsta"
import data from "./assets/dummy/data.json"
import Damar from "./components/damar"

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Firsta
      data={data}
      name="Firsta Adi Pradana"
      date="9/9/2021"
      />
    <Damar
      ucapan="Selamat Berbelanja!"
      jenis="CATEGORIES"
      buah="Fruits"
      sayur="Vegetables"
      minuman="Drinks"
      jajan="Snacks"
      />
  </React.StrictMode>,
  document.getElementById('root')
);
