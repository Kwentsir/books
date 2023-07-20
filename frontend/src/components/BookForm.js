import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../actions/bookActions';

const BookForm = () => {
    const [title, setTitle] = useState(' ');
    const [author, setAuthor] = useState(" ");
    const [year, setYear] = useState(" ");

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addBook({ title, author, year }));
        setTitle(' ');
        setAuthor(' ');
        setYear(' ');
    };

    return (
      <div id="book-form">
        <h2> Add New Book </h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="author">Author:</label>
            <input
              type="text"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="year">Year:</label>
            <input
              type="number"
              id="year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          </div>
          <button type="submit">Add Book</button>
        </form>
      </div>
    );
};

export default BookForm;