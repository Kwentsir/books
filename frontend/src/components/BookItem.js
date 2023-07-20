import React from "react";
import { useDispatch } from "react-redux";
import { deleteBook } from "../actions/bookActions";
import { useHistory } from "react-router-dom";

const BookItem = ({ book }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleDelete = () => {
    // Dispatch the deleteBook action with the book ID
    dispatch(deleteBook(book.id));
  };

  const handleEdit = () => {
    // Navigate to EditBook component with the book details
    history.push(`/edit/${book.id}`);
  };

  return (
    <div className="book-item">
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Year: {book.year}</p>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
};

export default BookItem;