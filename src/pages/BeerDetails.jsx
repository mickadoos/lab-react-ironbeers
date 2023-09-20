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

  useEffect(() => {
    fetchBeer();
  }, []);

  return (
    <>
      {beerFound && (
        <div class="card" style={{ width: "18rem" }}>
          <img
            src={beerFound.image_url}
            class="card-img-top"
            alt={beerFound.name}
          />
          <div class="card-body">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">{beerFound.name}</li>
              <li class="list-group-item">{beerFound.tagline}</li>
              <li class="list-group-item">
                <p class="card-text">
                {beerFound.description}
                </p>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default BeerDetails;
