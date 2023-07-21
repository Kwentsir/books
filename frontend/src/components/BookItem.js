import React from "react";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";

const BookItem = ({ book }) => {
  return (
    <div id="book-item">
      <div>
        <p>{book.title}</p>
        <p>Author: {book.author}</p>
        <p>Year: {book.year}</p>
      </div>
      <div>
        <EditButton  id={book.id} />
        <DeleteButton id={book.id} />
      </div>
    </div>
  );
};

export default BookItem;
