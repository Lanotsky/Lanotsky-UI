const initalState = {
    articles: []
}

const rootReducer = (state = initalState, action) => {
    switch (action.type) {
        case "ADD_ARTICLE":
        // does not mutate the state
            return { ...state, articles: [...state.articles, action.payload] };
        default:
            return state;
    }
}

export default rootReducer;