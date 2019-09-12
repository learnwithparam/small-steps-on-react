import React from "react";
import { Router, Link } from "@reach/router";

import "./App.css";

import TextSizeChanger from "./pages/textsize-changer";
import CountriesList from "./pages/countries-list";
import CountriesListUseReducer from "./pages/usereducer-countries-list";

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
      <li>
        <Link to="countries-list-usereducer">
          Managing error and loading state using useReducer
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
      <CountriesListUseReducer path="countries-list-usereducer" />
    </Router>
  );
}

export default App;
