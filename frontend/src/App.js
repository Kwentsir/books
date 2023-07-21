import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { fetchBooks } from './actions/bookActions';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import EditBook from './components/EditBook';

import './App.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    //Fetch books from the API when the component mounts
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <Router>
      <div id="app">
        <h1>Bookstore</h1>
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/edit/:id" element={<EditBook />} />
        </Routes>
        <BookForm />
      </div>
    </Router>
  );
};

export default App;
