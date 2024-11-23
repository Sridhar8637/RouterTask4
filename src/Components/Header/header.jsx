import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div id="nav">
              <Link to="/" style={{ textDecoration: 'none', color:'black'}}>
          <h1>Student</h1>
        </Link>
        <Link to="/studet">
          <button className="butNav">StudentDetail</button>
        </Link>
        <div id="navBut">
          <Link to="/login">
            <button className="butNav">Login</button>
          </Link>
          <Link to="/register">
            <button className="butNav">Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
