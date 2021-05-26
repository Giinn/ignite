const base_url = "https://api.rawg.io/api/";
const apiKey = `key=4600ede394164743ab3770b92d0a6405`;

// getting the date
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;

    if (month < 10) {
        return `0${month}`;
    } else {
        return month;
    }
}

const getCurrentDay = () => {
    const day = new Date().getDate();

    if (day < 10) {
        return `0${day}`;
    } else {
        return day;
    }
}

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// games
const popular_games =  `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10&`;
const upcomming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10&`;
const new_games = `games?dates=${lastYear},${currentDate}&ordering=-release&page_size=10&`;

export const popularGamesURL = () => `${base_url}${popular_games}${apiKey}`;
export const upcommingGamesURL = () => `${base_url}${upcomming_games}${apiKey}`;
export const newNewGamesURL = () => `${base_url}${new_games}${apiKey}`;

// details of specific game
export const getGameDetailsUrl = (gameId) => `${base_url}games/${gameId}.json?&${apiKey}`;

// game screenshots
export const gameScreenshotURL = (game_id) => `${base_url}games/${game_id}/screenshots?&.json?&${apiKey}`;

// search game
export const searchGameUrl = (game_name) => `${base_url}games?${apiKey}&search=${game_name}&page_size=10`;