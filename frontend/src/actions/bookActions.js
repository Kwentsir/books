import axios from 'axios';
import { FETCH_BOOKS, ADD_BOOK, UPDATE_BOOK, DELETE_BOOK } from './types';


// Action creators

//Fetch books
export const fetchBooks = () => async (dispatch) => {
    try {
        const response = await axios.get("/api/book/");
        dispatch({ type: FETCH_BOOKS, payload: response.data });
    } catch (error) {
        console.error('Error fetching books', error);
    }
};

// Add new book
export const addBook = (newBook) => async (dispatch) => {
    try {
        const response = await axios.post(
          "/api/book/",
          newBook
        );
        dispatch({ type: ADD_BOOK, payload: response.data });
    } catch (error) {
        console.error('Error adding book:', error);
    }
};

// Update book
export const updateBook = (id, updatedBook) => async (dispatch) => {
    try {
        const response = await axios.put(
          "/api/book/${id}/",
          updatedBook
        );
        dispatch({ type: UPDATE_BOOK, payload: response.data });
    } catch (error) {
        console.error('Error updating book:', error);
    }
};

// Delete book
export const deleteBook = (id) => async (dispatch) => {
    try {
        await axios.delete("/api/book/${id}/");
        dispatch({ type: DELETE_BOOK, payload: id });
    } catch (error) {
        console.error('Error deleting book', error);
    }
};