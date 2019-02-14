import { combineReducers } from 'redux';
import BookReducer from './book-reducer';

const rootReducer = combineReducers({
  books: BookReducer
});

export default rootReducer;