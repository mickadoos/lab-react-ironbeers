import React, { useState } from "react";
import axios from "axios";

const NewBeer = () => {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirst_brewed] = useState("");
  const [brewers_tips, setBrewers_tips] = useState("");
  const [attenuation_level, setAttenuation_level] = useState(0);
  const [contributed_by, setContributed_by] = useState("");

  async function postNewBeer(body) {
    try {
      const response = await axios.post(
        "https://ih-beers-api2.herokuapp.com/beers/new",
        body
      );
      console.log("Response from server: ", response.data);
      setName("");
      setTagline("");
      setDescription("");
      setFirst_brewed("");
      setBrewers_tips("");
      setAttenuation_level(0);
      setContributed_by("");
    } catch (error) {
      console.error(
        "Error ocurred when trying to post new beer to the database: ",
        error
      );
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by,
    };

    postNewBeer(body);
  };

  return (
    <div>
      <p>NewBeer</p>

      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <span className="input-group-text" id="name-beer">
            Name
          </span>
          <input
            type="text"
            name="name"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="name-beer"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="tagline-beer">
            Tagline
          </span>
          <input
            type="text"
            name="tagline"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="tagline-beer"
            onChange={(e) => setTagline(e.target.value)}
            value={tagline}
          />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="description-beer">
            Description
          </span>
          <textarea
            type="text"
            name="description"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="description-beer"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="first-brewed-beer">
            First brewed
          </span>
          <input
            type="text"
            name="first-brewed"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="first-brewed-beer"
            onChange={(e) => setFirst_brewed(e.target.value)}
            value={first_brewed}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="brewer-tips-beer">
            Brewer tips
          </span>
          <input
            type="text"
            name="brewer-tips"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="brewer-tips-beer"
            onChange={(e) => setBrewers_tips(e.target.value)}
            value={brewers_tips}
          />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-number" id="attenuation-level-beer">
            Attenuation level
          </span>
          <input
            type="number"
            name="attenuation-level"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="attenuation-level-beer"
            onChange={(e) => setAttenuation_level(e.target.value)}
            value={attenuation_level}
          />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="contributed-by-beer">
            Contributed by
          </span>
          <input
            type="text"
            name="contributed-by"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="contributed-by-beer"
            onChange={(e) => setContributed_by(e.target.value)}
            value={contributed_by}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add New
        </button>
      </form>
    </div>
  );
};

export default NewBeer;
