import React, { Component } from 'react';
import image5 from '../images/image5.jpeg';

class App3 extends Component {
    render() {
        return ( <
            div >
            <
            h2 className = "w3-text-light-grey" > My Photos < /h2> <
            hr style = {
                { width: '200px' }
            }
            className = "w3-opacity" / >
            <
            div className = "w3-row-padding"
            style = {
                { margin: '0-16px' }
            } >
            <
            div className = "w3-half" >
            <
            img src = { image5 }
            alt = "no pic"
            style = {
                { width: '50%' }
            }
            /> < /
            div > <
            /div> < /
            div >
        );
    }
}

export default App3;