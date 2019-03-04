import React, { Component } from 'react';

class App2 extends Component {
    render() {
        return ( <
            div >
            <
            div className = "w3-content w3-justify w3-text-grey w3-padding-64"
            id = "about" >
            <
            h2 className = "w3-text-light-grey" > My Name < /h2> <
            hr style = {
                { width: '200px' }
            }
            className = "w3-opacity" / >
            <
            p >
            Hari Nakka <
            /p> <
            h3 className = "w3-padding-16 w3-text-light-grey" > My Skills < /h3> <
            p className = "w3-wide" > Wed Design < /p> <
            div className = "w3-white" >
            <
            div className = "w3-dark-grey"
            style = {
                { height: '28px', width: '25%' }
            } > < /div> < /
            div > <
            p className = "w3-wide" > Problem Solving < /p> <
            div className = "w3-white" >
            <
            div className = "w3-dark-grey"
            style = {
                { height: '28px', width: '55%' }
            } > < /div> < /
            div > <
            p className = "w3-wide" > Painting < /p> <
            div className = "w3-white" >
            <
            div className = "w3-dark-grey"
            style = {
                { height: '28px', width: '90%' }
            } > < /div> < /
            div > < br / >

            <
            div className = "w3-row w3-center w3-padding-16 w3-section w3-light-grey" >
            <
            div className = "w3-quarter w3-section" >
            <
            span className = "w3-xlarge" > 0 + < /span><br / > web designs <
            /div> <
            div className = "w3-quarter w3-section" >
            <
            span className = "w3-xlarge" > 5 + < /span><br / > Paintings <
            /div> < /
            div > <
            /div> < /
            div >
        );
    }
}

export default App2;