import React from "react";
import { Router, Link } from "@reach/router";

import "./App.css";

import TextSizeChanger from "./pages/textsize-changer";
import CountriesList from "./pages/countries-list";
import CountriesListUseReducer from "./pages/usereducer-countries-list";
import CSSinReact from "./pages/css-in-react";
import CSSModulesinReact from "./pages/card-css-modules";
import BadgeComponentUsingEmotion from "./pages/badge";

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
      <li>
        <Link to="css-in-react">Card component using CSS in React</Link>
      </li>
      <li>
        <Link to="css-modules-in-react">
          Card component using CSS Modules in React
        </Link>
      </li>
      <li>
        <Link to="badge-using-emotion">Badge component using Emotion</Link>
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
      <CSSinReact path="css-in-react" />
      <CSSModulesinReact path="css-modules-in-react" />
      <BadgeComponentUsingEmotion path="badge-using-emotion" />
    </Router>
  );
}

export default App;
