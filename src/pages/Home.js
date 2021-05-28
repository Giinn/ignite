import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../actions/gamesAction';
import Game from '../components/Game';
import styled from 'styled-components';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import GameDetails from '../components/GameDetails';
import { useLocation } from 'react-router-dom';
import Loader from 'react-loader-spinner';

const Home = () => {
    // get current location
    const location = useLocation();
    const pathId = location.pathname.split('/')[2];

    const dispatch = useDispatch();

    const { 
        popularGames, 
        newGames, 
        upcommingGames, 
        searchedGames, 
        isLoading 
    } = useSelector(state => state.games);
    
    useEffect(() => {
        dispatch(loadGames());
    }, [dispatch]);

    return (
        <GameList>
            <AnimateSharedLayout type="crossfade">
                <AnimatePresence>
                    {pathId && 
                        <GameDetails pathId={pathId}/>
                    }
                </AnimatePresence>
                {!isLoading && searchedGames.length > 0 &&
                <div className="searched">
                    <h2>Searched games</h2>
                    <Games>
                    {searchedGames.map((game, index) => {
                        return(
                            <Game
                                key={index}
                                name={game.name}
                                released={game.released}
                                id={game.id}
                                image={game.background_image}
                            />
                        )
                    })}
                    </Games>
                </div>}

                {!isLoading ?
                <>
                    <h2>Upcomming games</h2>
                    <Games>
                    {upcommingGames.map((game, index) => {
                        return(
                            <Game
                                key={index}
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
                                key={index}
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
                                key={index}
                                name={game.name} 
                                released={game.released} 
                                id={game.id}
                                image={game.background_image}    
                            />
                        )
                    })}
                    </Games>
                </> :
                <Loader 
                    className="loader"
                    type="Watch"
                    width="200"
                    height="200"
                    color="#ff7676"
                />}
                

            </AnimateSharedLayout>
        </GameList>
    );
}

const GameList = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 5rem;
    h2 {
        text-decoration: underline;
        padding: 5rem 0rem;
        align-self: flex-start;
    };
    .loader {
        position: absolute;
    }
`;
const Games = styled(motion.div)`
    min-height: 70vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
`;

export default Home;
