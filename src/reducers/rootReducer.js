const initState = {
    posts:[
        {body: "quia et suscipit suscipit recusandae consequuntur expedita et cum↵reprehenderit molestiae ut ut quas totam↵nostrum rerum est autem sunt rem eveniet architecto",
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"},
        {body: "quia et suscipit suscipit recusandae consequuntur expedita et cum↵reprehenderit molestiae ut ut quas totam↵nostrum rerum est autem sunt rem eveniet architecto",
        id: 2,
        title: "2sunt aut facere repellat provident occaecati excepturi optio reprehenderit"},
    ]
}
const rootReducer = (state = initState, action) => {
    // switch(action.type){
    //     case 'SEARCH_BOOKS':
    // }
    console.log(action);
return state;
}

export default rootReducer;