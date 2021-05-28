const initState = {
    popularGames: [],
    newGames: [],
    upcommingGames: [],
    searchedGames: [],
    isLoading: true
}

const gamesReducer = (state = initState, action) => {
    switch (action.type) {
        case "FETCH_GAMES":
            return {
                ...state,
                popularGames: action.payload.popularGames,
                upcommingGames: action.payload.upcommingGames,
                newGames: action.payload.newGames,
                isLoading: false
            };
        case "FETCH_SEARCHED":
            return {
                ...state,
                searchedGames: action.payload.searchedGames,
                isLoading: false
            };
        case "CLEAR_SEARCHED":
            return {
                ...state,
                searchedGames: [],
            }
        case "LOADING":
            return {
                ...state,
                isLoading: true
            }
        default:
            return{...state}
    }
}

export default gamesReducer;
