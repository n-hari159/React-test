import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Square from './App';
import Board from './App1';

class Game extends React.Component {
    render() {
        return ( <
            div className = "game" >
            <
            div className = "game-board" >
            <
            Board / >
            <
            /div> <
            div className = "game-info" >
            <
            div > { /* status */ } < /div> <
            ol > { /* TODO */ } < /ol> < /
            div > <
            /div>
        );
    }
}

export default Game;