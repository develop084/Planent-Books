import React from "react";
import './Header.css'
import {Link} from "react-router-dom";
function Header() {
  return (
    <div>
      <nav className="top-nav-wrapper">
        <div>
      
          <img src="Group 4.svg" alt="logo" />
        </div>
        <div className="btn-wrapper">
          <Link to="/">
            <button className="btn">
              <span>💜</span>
              My List
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;
