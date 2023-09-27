import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BeerDetails = () => {
  const [beerFound, setBeerFound] = useState({});

  const { beerId } = useParams();

  async function fetchBeer() {
    try {
      const beerResponse = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
      );
      setBeerFound(beerResponse.data);
    } catch (error) {
      console.error("Error fetching beer data: ", error);
    }
  }

  async function fetchRandomBeer() {
    try {
      const beerResponse = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/random`
      );
      setBeerFound(beerResponse.data);
    } catch (error) {
      console.error("Error fetching one random beer data: ", error);
    }
  }

  useEffect(() => {
    if (beerId) {
      fetchBeer();
    } else {
      fetchRandomBeer();
    }
  }, []);

  return (
    <>
      {beerFound && (
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={beerFound.image_url}
            className="card-img-top"
            alt={beerFound.name}
          />
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{beerFound.name}</li>
              <li className="list-group-item">{beerFound.tagline}</li>
              <li className="list-group-item">
                <p className="card-text">{beerFound.description}</p>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default BeerDetails;
