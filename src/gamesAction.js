import axios from 'axios';
import { popularGamesURL, upcommingGamesURL, newNewGamesURL } from './api';

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