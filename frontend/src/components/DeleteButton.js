import React from "react";
import { useDispatch } from "react-redux";
import { deleteBook } from "../actions/bookActions";

const DeleteButton = ({ id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteBook(id));
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteButton;
