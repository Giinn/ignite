import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { loadDetails } from '../actions/gameDetailsAction';
import { Link } from 'react-router-dom';
import { smallImage } from '../util';

const Game = ({ name, released, id, image }) => {
    const pathIdString = id.toString();
    const dispatch = useDispatch();

    const loadDetailsHandler = () => {
        document.body.style.overflow = "hidden";

        dispatch(loadDetails(id));
    }

    return (
        <StyledGame layoutId={pathIdString} onClick={loadDetailsHandler}>
            <Link to={`/game/${id}`}>
                <motion.h3 layoutId={`title ${pathIdString}`}>{name}</motion.h3>
                <p>{released}</p>
                <motion.img layoutId={`image ${pathIdString}`} src={smallImage(image, 640)} alt={name} />
            </Link>
        </StyledGame>
    );
}

const StyledGame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
    text-align: center;
    border-radius: 1rem;
    overflow: hidden;
    img {
        width: 100%;
        height: 40vh;
        object-fit: cover;
    }
`;

export default Game;
