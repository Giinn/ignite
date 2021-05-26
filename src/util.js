// import all images for platforms
import playstation from './img/playstation.svg';
import steam from './img/steam.svg';
import xbox from './img/xbox.svg';
import nintendo from './img/nintendo.svg';
import apple from './img/apple.svg';
import gamepad from './img/gamepad.svg';

// return a platform image based on it's name
export const getPlatformImages = (platform) => {
    switch (platform) {
        case "PlayStation 4":
            return playstation;
        case "Xbox One":
            return xbox;
        case "PC":
            return steam;
        case "Nintendo Switch":
            return nintendo;
        case "iOS":
            return apple;
        default:
            return gamepad;
    }
}
