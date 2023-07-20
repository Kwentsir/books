import { FETCH_BOOKS, ADD_BOOK, UPDATE_BOOK, DELETE_BOOK } from "../actions/types";

const initialState = {
    books: [],
};

const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BOOKS:
            return { ...state, books: action.payload };
        case ADD_BOOK:
            return { ...state, books: [...state.books, action.payload] };
        case UPDATE_BOOK:
            return {
                ...state,
                books: state.books.map((book) =>
                book.id === action.payload.id ? action.payload: book
                ),
            };
        case DELETE_BOOK:
            return {
                ...state,
                books: state.books.filter((book) => book.id !== action.payload),
            };
        default:
            return state; 
    }
};

export default bookReducer;