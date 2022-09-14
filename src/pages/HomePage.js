import React from "react";
import BookList from "../BookList";
import { Routes, Route, Link } from "react-router-dom";
import Register from "./Register";

function HomePage() {
  return (
    <div>
      <nav className="top-nav-wrapper">
        <div>
        <Link to="/">
          <img src="Group 4.svg" alt="logo" />
          </Link>
        </div>  
        <div className="btn-wrapper">
          <Link to="/add">
            <button className="btn">
              <span>➕</span>
              Add Book
            </button>
          </Link>
        </div>
      </nav>
      <div>
       <BookList />
      </div>
    </div>
  );
}

export default HomePage;
