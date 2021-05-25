import axios from 'axios';
import { getGameDetailsUrl, gameScreenshotURL } from '../api';

export const loadDetails = (id) => async (dispatch) => {
    const gameDetailsData = await axios.get(getGameDetailsUrl(id));
    const gameScreenshotData = await axios.get(gameScreenshotURL(id));

    dispatch({
        type: "GET_DETAIL",
        payload: {
            game: gameDetailsData.data,
            screenshots: gameScreenshotData.data
        }
    });
}