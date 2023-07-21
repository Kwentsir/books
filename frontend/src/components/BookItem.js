import React from "react";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";

const BookItem = ({ book }) => {
  return (
    <div id="book-item">
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Year: {book.year}</p>
      <EditButton id={book.id} />
      <DeleteButton id={book.id} />
    </div>
  );
};

export default BookItem;
