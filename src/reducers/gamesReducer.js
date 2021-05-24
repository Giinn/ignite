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
            }
    
        default:
            return{...state}
    }
}

export default gamesReducer;
