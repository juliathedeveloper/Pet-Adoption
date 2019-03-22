import React, { Component } from 'react';
import Header from './Header';
import Gallery from './Gallery';
import Footer from './Footer';

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Gallery/>
                <Footer/>
            </div>
        )
    }
}

export default App;