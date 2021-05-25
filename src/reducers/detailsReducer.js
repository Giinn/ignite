const initState = {
    game: { platforms: [] },
    screenshots: { results: [] },
    isLoading: true
}

const detailsReducer = (state = initState, action) => {
    switch (action.type) {
        case "GET_DETAIL":
            return {
                ...state,
                game: action.payload.game,
                screenshots: action.payload.screenshots,
                isLoading: false
            }
        case "LOADING":
            return {
                ...state,
                isLoading: true
            }
    
        default:
            return {
                ...state
            }
    }
}

export default detailsReducer;
