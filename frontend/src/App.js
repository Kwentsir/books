import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchBooks } from './actions/bookActions';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import './App.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    //Fetch books from the API when the component mounts
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div id='app'>
      <h1> Bookstore </h1>
      <BookList />
      <BookForm />
    </div>
  );
};

export default App;
