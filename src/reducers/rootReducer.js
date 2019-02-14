const initState = {
    books: [],
    bookData:[]
}
const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SEARCH_BOOKS':
            return {
                ...state,
                books: action.books
            };
        default:
            return state;
    }
}
export default rootReducer;