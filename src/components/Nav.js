import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import logo from '../img/logo.svg';
import { fetchSearch } from '../actions/gamesAction';
import { useDispatch } from 'react-redux';

const Nav = () => {
    const dispatch = useDispatch();
    const [textInput, setTextInput] = useState('');

    const inputHandler = (event) => {
        setTextInput(event.target.value);
    }

    const submitSearch = (event) => {
        event.preventDefault();

        if (textInput) {
            dispatch(fetchSearch(textInput));
        }
        setTextInput('');
    }

    const clearSearchedGames = () => {
        dispatch({ type: "CLEAR_SEARCHED" });
    }

    return (
        <StyledNav>
            <Logo>
                <img src={logo} alt="logo" />
                <h1>Ignite</h1>
            </Logo>
            <form onSubmit={submitSearch} className="search">
                <input type="text" onChange={inputHandler} value={textInput} />
                <button type="submit" >Search</button>
                <button onClick={clearSearchedGames}>Clear Search</button>
            </form>
        </StyledNav>
    );
}

const StyledNav = styled(motion.div)`
    padding: 3rem 5rem;
    text-align: center;
    input {
        width: 30%;
        font-size: 1.5rem;
        padding: 0.5rem;
        border: none;
        margin-top: 1rem;
        box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
        outline: none;
    }
    button {
        font-size: 1.5rem;
        border: none;
        padding: 0.5rem 2rem;
        cursor: pointer;
        background: #ff7676;
        color: white;
        margin: 0rem 0.3rem;
    }
`;

const Logo = styled(motion.div)`
    display: flex;
    justify-content: center;
    padding: 1rem;
    cursor: pointer;
    img {
        height: 2rem;
        width: 2rem;
    }
`;

export default Nav;
