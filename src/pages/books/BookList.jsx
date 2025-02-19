import React from "react";
import { getAllBooks } from "../../data/books.js"
import BookCard from "./BookCard";

const BookList = () => {
  const books = getAllBooks()
  console.log(books);
  
  return (
    <div className="content">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
        {
          books.map((book, index) => (
            <BookCard key={index} book={book}/>
          ))
        }
      </div>
    </div>
  )
}

export default BookList