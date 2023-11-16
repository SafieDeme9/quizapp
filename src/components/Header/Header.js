import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <div className="title">
        <Link class="nav-item" to="/">
          <h1>Quizapp</h1>
        </Link>
      </div>
      <div class="navbar">
        <div class="nav-links">
          <Link class="nav-item" to="/">
            Home
          </Link>
          <Link class="nav-item" to="/">
            {" "}
            About us
          </Link>
          <Link class="nav-item" to="/settings">
            {" "}
            <button className="button">Play !</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
