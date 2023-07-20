import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateBook } from '../actions/bookActions';

const EditBook = ({ book }) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState(book.title);
    const [author, setAuthor] = useState(book.author);
    const [year, setYear] = useState(book.year);

    const handleUpdate = () => {
        // Create a new book object with updated details
        const updatedBook = {
            id: book.id,
            title,
            author,
            year,
        };

        //dispatch the updatedBook action with the updated book
        dispatch(updateBook(updatedBook));
    };

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
        <button onClick={handleUpdate}>Update</button>
      </div>
    );
};

export default EditBook;