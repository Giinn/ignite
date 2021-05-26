import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getPlatformImages } from '../util';

// star images
import starEmpty from '../img/star-empty.png';
import starFull from '../img/star-full.png';

const GameDetails = ({ pathId }) => {
    const history = useHistory();
    const { screenshots, game, isLoading } = useSelector(state => state.details);

    const exitDetailHandler = (event) => {
        const element = event.target;

        if (element.classList.contains('shadow')) {
            document.body.style.overflow = "auto";
            history.push('/');
        }
    }

    const getStars = () => {
        const stars = [];
        const rating = Math.floor(game.rating);

        for (let i = 1; i < 5; i++){
            if (i <= rating) {
                stars.push(<img alt={rating} key={i} src={starFull} />);
            } else {
                stars.push(<img alt={rating} key={i} src={starEmpty} />);
            }
        }
        
        return stars;
    }
    
    return (
        <>
            {!isLoading && (
                <CardShadow className="shadow" onClick={exitDetailHandler} >
                    <Details layoutId={pathId}>
                        <Stats>
                            <div className="rating">
                                <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                                <p>Rating: {game.rating}</p>
                                {getStars()}
                            </div>
                            <Info>
                                <h3>Platforms</h3>
                                <Platforms>
                                    {game.platforms.map(platform => {
                                        return (
                                            <img 
                                                key={platform.platform.id} 
                                                src={getPlatformImages(platform.platform.name)} 
                                                alt={platform.platform.name} >
                                            </img>
                                        )
                                    })}
                                </Platforms>
                            </Info>
                        </Stats>
                        <Media>
                            <motion.img layoutId={`image ${pathId}`} src={game.background_image} alt={game.name} />
                        </Media>
                        <Description>
                            <p>{game.description_raw}</p>
                        </Description>
                        <Gallery>
                            {screenshots.results.map(screen => {
                                return (
                                    <img src={screen.image} alt={screen.id} />
                                )
                            })}
                        </Gallery>
                    </Details>
                </CardShadow>
            )}
        </>
    )
}

const CardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    &::-webkit-scrollbar {
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #ff7676;
    }
    &::-webkit-scrollbar-track {
        background: white;
    }
`;

const Details = styled(motion.div)`
    width: 80%;
    border-radius: 1rem;
    padding: 2rem 2rem;
    background: white;
    position: absolute;
    left: 10%;
    color: black;
    z-index: 100;
    img {
        width: 100%;
    }
`;

const Stats = styled(motion.div)`
    display: flex;
    align-items:center;
    justify-content: space-between;
    img {
        width: 2rem;
        height: 2rem;
        display: inline;
    }
`;

const Info = styled(motion.div)`
    text-align: center;
`;

const Platforms = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;
    img {
        margin-left: 3rem;
    }
`;

const Media = styled(motion.div)`
    margin-top: 5rem;
    img {
        width: 100%;
    }
`;

const Description = styled(motion.div)`
    margin: 5rem 0rem;
`;

const Gallery = styled(motion.div)`
    img {
        padding: 0.2rem 0rem;
    }
`;

export default GameDetails;
