import axios from 'axios';
import { popularGamesURL, upcommingGamesURL, newNewGamesURL, searchGameUrl } from '../api';

// action creator
export const loadGames = () => async (dispatch) => {
    // fetch games
    const popularGamesData = await axios.get(popularGamesURL());
    const upcommingGameData = await axios.get(upcommingGamesURL());
    const newGamesData = await axios.get(newNewGamesURL());

    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popularGames: popularGamesData.data.results,
            upcommingGames: upcommingGameData.data.results,
            newGames: newGamesData.data.results
        }
    });
}

export const fetchSearch = (game_name) => async (dispatch) => {
    const searchGames = await axios.get(searchGameUrl(game_name));

    dispatch({
        type: "FETCH_SEARCHED",
        payload: {
            searchedGames: searchGames.data.results
        }
    });
}