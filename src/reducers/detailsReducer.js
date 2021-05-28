const initState = {
    game: { platforms: [] },
    screenshots: { results: [] },
    isDetailsLoading: true
}

const detailsReducer = (state = initState, action) => {
    switch (action.type) {
        case "GET_DETAIL":
            return {
                ...state,
                game: action.payload.game,
                screenshots: action.payload.screenshots,
                isDetailsLoading: false
            }
        case "LOADING_DETAILS":
            return {
                ...state,
                isDetailsLoading: true
            }
    
        default:
            return {
                ...state
            }
    }
}

export default detailsReducer;
