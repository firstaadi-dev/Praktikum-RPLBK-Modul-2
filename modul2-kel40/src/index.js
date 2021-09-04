import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import CardList from "./components/CardList";
import Gambar from "./assets/images/tes.jpg";
import Quotes from "./components/Quotes";
import data from "./assets/dummy/praktikan.json";
const quotes = "Rapat terus, CEO kagak";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <CardList
      data={data}
      isNameBold
      image={Gambar}
    />
    <Quotes author="Kamu" quotes={quotes} />
  </React.StrictMode>,
  document.getElementById("root")
);
