import React from 'react'
import './BookCard.css'

function BookCard({b_title,b_img,b_author,b_comments}) {
  return (
    <div>
     <div className="book-card-wrapper">
     <div className="bookimg-wrapper">
     <img className="book-img"src={b_img} alt="" />
     </div>
     <div className="info-bg">
     <div className="title-cover">
     <p className="title">{b_title}</p>
     </div>
     
     <p className="author">- By {b_author}</p>
     </div>
     </div>
    </div>
  )
}

export default BookCard