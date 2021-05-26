const initState = {
    popularGames: [],
    newGames: [],
    upcommingGames: [],
    searchedGames: []
}

const gamesReducer = (state = initState, action) => {
    switch (action.type) {
        case "FETCH_GAMES":
            return {
                ...state,
                popularGames: action.payload.popularGames,
                upcommingGames: action.payload.upcommingGames,
                newGames: action.payload.newGames
            };
        case "FETCH_SEARCHED":
            return {
                ...state,
                searchedGames: action.payload.searchedGames
            };
        case "CLEAR_SEARCHED":
            return {
                ...state,
                searchedGames: []
            }
        default:
            return{...state}
    }
}

export default gamesReducer;
