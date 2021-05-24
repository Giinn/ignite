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
    console.log(popularGames, newGames, upcommingGames);
  
    return (
        <GameList>
            <h1>Hello from home page!</h1>

            <Games>
            {upcommingGames.map((game, index) => {
                return(
                    <Game name={game.name} released={game.released} />
                )
            })}
            </Games>
        </GameList>
    );
}

const GameList = styled(motion.div)``;
const Games = styled(motion.div)``;

export default Home;
