import React, { useEffect, useState } from "react";

// https://restcountries.eu/rest/v2/all?fields=name

const CountriesList = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
      const response = await fetch(
        "https://restcountries.eu/rest/v2/all?fields=name"
      );
      const jsonResponse = await response.json();
      setCountries(jsonResponse);
    };

    getCountries();
  }, []);

  return (
    <div className="App">
      <h1>List of countries</h1>
      <ul>
        {countries.map((country, index) => {
          return <li key={`${country.name}-${index}`}>{country.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default CountriesList;
