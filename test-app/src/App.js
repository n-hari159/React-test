import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

class Square extends React.Component {
    render() {
        return ( <
            button className = "square" > { this.props.value } < /button>
        );
    }
}
export default Square;