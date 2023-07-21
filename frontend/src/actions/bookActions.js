import axios from 'axios';
import { FETCH_BOOKS, ADD_BOOK, UPDATE_BOOK, DELETE_BOOK } from './types';


// Action creators

//Fetch books
export const fetchBooks = () => async (dispatch) => {
    try {
        const response = await axios.get("http://127.0.0.1:8000/api/book/");
        dispatch({ type: FETCH_BOOKS, payload: response.data });
    } catch (error) {
        console.error('Error fetching books', error);
    }
};

// Add new book
export const addBook = (newBook) => async (dispatch) => {
    try {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/book/",
          newBook
        );
        dispatch({ type: ADD_BOOK, payload: response.data });
    } catch (error) {
        console.error('Error adding book:', error);
    }
};

// Update book
export const updateBook = (book, id) => async (dispatch) => {
    try {
        const response = await axios.put(
          `http://127.0.0.1:8000/api/book/${id}`,
          book
        );
        dispatch({ type: UPDATE_BOOK, payload: response.data });
    } catch (error) {
        console.error('Error updating book:', error.response);
    }
};

// Delete book
export const deleteBook = (id) => async (dispatch) => {
    try {
        await axios.delete(`http://127.0.0.1:8000/api/book/${id}/`);
        dispatch({ type: DELETE_BOOK, payload: id });
    } catch (error) {
        console.error('Error deleting book', error);
    }
};