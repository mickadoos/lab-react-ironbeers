import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Link to="/" style={{ textDecoration: "none" }}>
      <nav className="navbar bg-body-tertiary ">
        <div className="container-fluid bg-primary">
          <span className="navbar-brand mb-0 h1 text-white">Iron Beers</span>
        </div>
      </nav>
    </Link>
  );
};

export default Header;
