import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { updateBook } from "../actions/bookActions";
import BookItem from "./BookItem"; // Import the BookItem component

const EditBook = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const book = useSelector((state) =>
    state.books.find((book) => book.id === parseInt(id))
  );

    const [title, setTitle] = useState(""); // Add these state variables
    const [author, setAuthor] = useState("");
    const [year, setYear] = useState("");

  // New state variable to track update status
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {

    if (book) {
      setTitle(book.title);
      setAuthor(book.author);
      setYear(book.year);
    }
  }, [book]);

  const navigate = useNavigate();
  const handleUpdate = () => {
    // Check if the book prop is defined before proceeding
    if (!book) {
      return;
    }

    // Create a new book object with updated details
    const updatedBook = {
      id: book.id,
      title,
      author,
      year,
    };

    // Dispatch the updatedBook action with the updated book
  dispatch(updateBook(updatedBook, book.id)).then((response) => {
    // Check if book was successfully updated
    if(response && response.data && response.data.id){
         setIsUpdated(true);
    }
 
   })
     .catch((error) => {
      console.error("Error updating book:", error);
     });
  };

  //Redirect to homepage after successful update
  
 useEffect(() => {
  if(isUpdated){
    navigate("/");
  }
 }, [isUpdated, navigate]);

  if (!book) {
    return <div>Loading...</div>; // Or any other loading state or message
  }

  return (
    <div id="edit-book">
      <h2> Edit Book Details </h2>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Author:</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div>
        <label>Year:</label>
        <input
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
      </div>
      <button id="update-button" onClick={handleUpdate}>Update</button>

      {/* Render the BookItem component with the updated book details */}
      <BookItem
        book={{
          ...book,
          title,
          author,
          year,
        }}
      />
    </div>
  );
};

export default EditBook;