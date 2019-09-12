import React from "react";
import { Router, Link } from "@reach/router";

import "./App.css";

import TextSizeChanger from "./pages/textsize-changer";
import CountriesList from "./pages/countries-list";

const Home = () => {
  return (
    <ul>
      <li>
        <Link to="textsize-changer">
          useState example by building a text-size changer
        </Link>
      </li>
      <li>
        <Link to="countries-list">
          Fetch API data in React using useEffect hooks
        </Link>
      </li>
    </ul>
  );
};

function App() {
  return (
    <Router>
      <Home path="/" />
      <TextSizeChanger path="textsize-changer" />
      <CountriesList path="countries-list" />
    </Router>
  );
}

export default App;
