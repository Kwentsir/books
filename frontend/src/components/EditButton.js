import React from "react";
import { useNavigate } from "react-router-dom";

const EditButton = ({ id }) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/edit/${id}`);
  };

  return <button onClick={handleEdit}>Edit</button>;
};

export default EditButton;