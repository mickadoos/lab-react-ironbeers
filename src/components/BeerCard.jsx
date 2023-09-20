import React from "react";
import { Link } from "react-router-dom";

const BeerCard = ({ beer }) => {
  return (
    <div className="row border">
      <div className="col-3">
        <img className="w-100" src={beer.image_url} alt={beer.name} />
      </div>
      <div className="col-9">
        <p className="fs-1">{beer.name}</p>
        <p className="fs-3 text-muted">{beer.tagline}</p>
        <p className="fs-6"><span className="fw-bold">Created by: </span>{beer.contributed_by}</p>
        <Link to={`/beers/${beer._id}`}>
        <button href="a" className="btn btn-primary">Beer Details</button>
        </Link>
      </div>
    </div>
  );
};

export default BeerCard;
