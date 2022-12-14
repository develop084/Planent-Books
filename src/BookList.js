import React, { useState } from 'react';
import BookCard from './components/BookCard';
import './BookList.css'

export const books = [
  { title: 'Welcome Home', coverImg: 'https://m.media-amazon.com/images/I/81KldW5gSvL._AC_UY218_.jpg', author: 'Nazwa Zebian' , comments :"Do you often wonder whether you really have it in you to accomplish your goals, to win over obstacles, and to succeed in life? " },
  { title: 'How to Talk to Anyone', coverImg: 'https://m.media-amazon.com/images/I/61MLInWDeJL._AC_UL320_.jpg', author: 'Liel Loundess' , comments :"Do you often wonder whether you really have it in you to accomplish your goals, to win over obstacles, and to succeed in life? " },
  { title: 'The Power of Your Subconcious Mind', coverImg: 'https://m.media-amazon.com/images/I/71UwSHSZRnS._AC_UY218_.jpg', author: 'Josheph M.' , comments :"Do you often wonder whether you really have it in you to accomplish your goals, to win over obstacles, and to succeed in life? " },
  { title: 'You Can', coverImg: 'https://m.media-amazon.com/images/I/813uPMOnskL._AC_UY218_.jpg', author: 'George Gill' , comments :"Do you often wonder whether you really have it in you to accomplish your goals, to win over obstacles, and to succeed in life? " },
];

export default function BookList() {
  const [update, setUpdate] = useState([...books]);


 

  return (
    <div className="display-book">
      {update.map((book) => {
        return (
          
           <BookCard b_title={book.title} b_img={book.coverImg} b_author={book.author} b_comments={book.comments} />
          
        );
      })  }

    </div>
  );
}
