import React, { Component } from 'react';
import image4 from '../images/image4.jpeg';

class App1 extends Component {
    render() {
        return ( <
            div >
            <
            header className = "w3-container w3-padding-32 w3-center w3-black"
            id = "home" >
            <
            h4 className = "w3-jumbo" > < span className = "w3-hide-small" > I 'm</span> Hari Nakka</h4> <
            p > Web Designer < /p> <
            img src = { image4 }
            alt = "No pic"
            className = "w3-image"
            width = "500"
            height = "600" / >
            <
            /header> < /
            div >
        );
    }
}

export default App1;