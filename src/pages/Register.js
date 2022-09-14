import React,{useState} from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import { books } from "../BookList";
function Register() {
  const [book, setBook] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  const [update, setUpdate] = useState([...books]);
  
  const changeEventName = (e) => {
    e.preventDefault();
    setBook(e.target.value);
    console.log(e.target.value);
  };
  const changeEventAuthor = (e) => {
    e.preventDefault();
    setAuthor(e.target.value);
  };
  const changeEventImage = (e) => {
    e.preventDefault();
    setImage(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const updatedArr = [
      {
        title: book,
        coverImg : image,
        author:author,

      },
    ];
    setUpdate([...books, ...updatedArr]);
    books.push(...updatedArr);
    e.value = ' ';
  };

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
        onChange={changeEventName}
          type="text"
          placeholder="What's your Book Title"
          id="title-book"
        />
        <input onChange={changeEventAuthor} type="text" placeholder="Author" id="author-name" />
        <input onChange={changeEventImage} type="text" placeholder="cover image link" />
        <input
          className="comments"
          type="text"
          placeholder="Comments and About the book"
          id=""
        />
        <button onClick={submitHandler} className="btn-submit" type="submit">
          Save
        </button>
      </form>
    </div>
  );
}

export default Register;
