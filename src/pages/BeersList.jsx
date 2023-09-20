import axios from "axios";
import React, { useEffect, useState } from "react";
import BeerCard from "../components/BeerCard";

const BeersList = () => {
  const [beers, setBeers] = useState([]);

  async function fetchBeers() {
    try {
      const beersResponse = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      setBeers(beersResponse.data);
    } catch (error) {
      console.error("Error when fetching data: ", error);
    }
  }

  useEffect(() => {
    fetchBeers();
  }, []);

  return (
    <div>
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
