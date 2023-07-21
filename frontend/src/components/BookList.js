import React from "react";
import { useSelector } from "react-redux";
import BookItem from "./BookItem"; // Import the BookItem component

const BookList = () => {
  const books = useSelector((state) => state.books);

  return (
    <div id="book-list">
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          // Use BookItem component to render each book
          <li key={book.id}>
            <BookItem book={book} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;