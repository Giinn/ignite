import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../actions/gamesAction';
import Game from '../components/Game';
import styled from 'styled-components';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import GameDetails from '../components/GameDetails';
import { useLocation } from 'react-router-dom';

const Home = () => {
    // get current location
    const location = useLocation();
    const [userSearchedGames, setUserSearchedGames] = useState([]);
    const pathId = location.pathname.split('/')[2];
    const { popularGames, newGames, upcommingGames, searchedGames } = useSelector(state => state.games);

    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(loadGames());
      setUserSearchedGames(searchedGames);
    }, [dispatch, searchedGames]);

    console.log(searchedGames)
    return (
        <GameList>
            <AnimateSharedLayout type="crossfade">
                <AnimatePresence>
                    {pathId && 
                        <GameDetails pathId={pathId}/>
                    }
                </AnimatePresence>
                {userSearchedGames.length > 0 && (
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
                </div>)}
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
            </AnimateSharedLayout>
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
