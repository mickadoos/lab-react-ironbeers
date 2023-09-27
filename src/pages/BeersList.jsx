import axios from "axios";
import React, { useEffect, useState } from "react";
import BeerCard from "../components/BeerCard";
import SearchBar from "../components/SearchBar";

const BeersList = () => {
  const [beers, setBeers] = useState([]);
  const [allBeersData, setAllBeersData] = useState([]);

  async function fetchBeers() {
    try {
      const beersResponse = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      setAllBeersData(beersResponse.data);
      setBeers(beersResponse.data);
    } catch (error) {
      console.error("Error when fetching data: ", error);
    }
  }

  async function fetchQueryBeers(query) {
    try {
      const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`);
      setBeers(response.data);
    } catch (error) {
      console.error("Error ocurred when fetching beers by query: ", error);
    }
  }

  const filterBeers = (str) => {
    if (str === "")
    {
      setBeers(allBeersData);
    }
    else {
      fetchQueryBeers(str);
    }
  }

  useEffect(() => {
    fetchBeers();
  }, []);

  return (
    <div>
      <SearchBar filterSearch={filterBeers} />
      {beers && (
        <div className="container m-3">
          {beers.map((beer, k) => {
            return <BeerCard beer={beer} key={k} />;
          })}
        </div>
      )}
    </div>
  );
};

export default BeersList;
