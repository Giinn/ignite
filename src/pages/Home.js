import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../gamesAction';
import Game from '../components/Game';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(loadGames());
    }, [dispatch]);

    const { popularGames, newGames, upcommingGames } = useSelector(state => state.games);
  
    return (
        <GameList>
            <h2>Upcomming games</h2>
            <Games>
            {upcommingGames.map((game, index) => {
                return(
                    <Game
                        name={game.name}
                        released={game.released}
                        id={game.id}
                        image={game.background_image}
                    />
                )
            })}
            </Games>

            <h2>Popular games</h2>
            <Games>
            {popularGames.map((game, index) => {
                return(
                    <Game 
                        name={game.name} 
                        released={game.released} 
                        id={game.id}
                        image={game.background_image}    
                    />
                )
            })}
            </Games>

            <h2>New games</h2>
            <Games>
            {newGames.map((game, index) => {
                return(
                    <Game 
                        name={game.name} 
                        released={game.released} 
                        id={game.id}
                        image={game.background_image}    
                    />
                )
            })}
            </Games>
        </GameList>
    );
}

const GameList = styled(motion.div)`
    padding: 0rem 5rem;
    h2 {
        padding: 5rem 0rem;
    };
`;
const Games = styled(motion.div)`
    min-height: 70vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
`;

export default Home;
