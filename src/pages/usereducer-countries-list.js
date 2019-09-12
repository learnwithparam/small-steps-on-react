import React, { useEffect, useReducer } from "react";

// https://restcountries.eu/rest/v2/all?fields=name

// When your state is a string, boolean or any single value parameters, then use useState
// when your state is object, array, then use useReducer

const initialState = {
  loading: false,
  error: false,
  data: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "loading":
      return { ...state, loading: action.payload };
    case "error":
      return { ...state, loading: false, error: action.payload };
    case "success":
      return { ...state, error: false, loading: false, data: action.payload };
    default:
      return state;
  }
};

const CountriesListUseReducer = () => {
  const [countries, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const getCountries = async () => {
      dispatch({ type: "loading", payload: true });

      const response = await fetch(
        "https://restcountries.eu/rest/v2/all?fields=name"
      );
      if (response.status < 300 && response.status >= 200) {
        const jsonResponse = await response.json();
        dispatch({ type: "success", payload: jsonResponse });
      } else {
        dispatch({ type: "error", payload: true });
      }
    };

    getCountries();
  }, []);

  return (
    <div className="App">
      <h1>List of countries</h1>
      <ul>
        {countries.loading && <div>loading...</div>}
        {countries.error && (
          <div style={{ color: "red" }}>An error occurred</div>
        )}
        {countries &&
          countries.data &&
          countries.data.map((country, index) => {
            return <li key={`${country.name}-${index}`}>{country.name}</li>;
          })}
      </ul>
    </div>
  );
};

export default CountriesListUseReducer;
