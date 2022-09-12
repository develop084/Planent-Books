import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div>
      {/* Add Book Header  */}
      <nav className="top-nav-wrapper">
        <div>
        <Link to="/">
          <img src="Group 4.svg" alt="logo" />
          </Link>
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
      {/* Add Book Header ends here  */}
      <div className="heading-wrapper">
        <h3 className="heading-register">
          Build Your Own Planet 🪐 By Adding Knowledge🧠
        </h3>
      </div>

      {/* form starts here  */}
      <form action="submit">
        <input
          type="text"
          placeholder="What's your Book Title"
          id="title-book"
        />
        <input type="text" placeholder="Author" id="author-name" />
        <input type="text" placeholder="cover image link" />
        <input
          className="comments"
          type="text"
          placeholder="Comments and About the book"
          id=""
        />
        <button className="btn-submit" type="submit">
          Save
        </button>
      </form>
    </div>
  );
}

export default Register;
