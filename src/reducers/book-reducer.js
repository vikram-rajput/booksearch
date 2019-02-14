import { SEARCH_BOOKS, FETCH_BOOK } from "../actions/search-books-action";
const INITIAL_STATE = { searchResult: [], bookDescription: {} };
const BookReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_BOOKS:
      return {
        ...state,
        searchResult: action.payload
      };
    case FETCH_BOOK:
      return {
        ...state,
        bookDescription: action.payload
      };
    default:
      return state;
  }
};
export default BookReducer;
