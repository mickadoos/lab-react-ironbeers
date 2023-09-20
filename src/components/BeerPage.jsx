import React from 'react'

const BeerPage = ({ beersPng, title }) => {
  return (
    <div className="col">
    <div className="card w-75" style={{ width: "18rem" }}>
      <img src={beersPng} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up
          the bulk of the card's content.
        </p>
      </div>
    </div>
  </div>
  )
}

export default BeerPage