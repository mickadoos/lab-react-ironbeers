import React from "react";
import beersPng from "../assets/beers.png";
import randomBeerPng from "../assets/random-beer.png";
import newBeerPng from "../assets/new-beer.png";
import BeerPage from "../components/BeerPage";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <div className="container p-5">
        <div className="row">
          <Link to="/beers" style={{ textDecoration: "none" }}>
            <BeerPage beersPng={beersPng} title={"All Beers"} />
          </Link>
          <Link to="/random-beer" style={{ textDecoration: "none" }}>
            <BeerPage beersPng={randomBeerPng} title={"Random Beer"} />
          </Link>
          <Link to="/new-beer" style={{ textDecoration: "none" }}>
            <BeerPage beersPng={newBeerPng} title={"New Beer"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
