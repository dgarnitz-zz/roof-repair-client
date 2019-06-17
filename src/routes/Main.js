import React, { Component } from 'react';
import Header from '../components/Header';

class Main extends Component {
    render(){
        return (
            <div>
                <Header />
                <p>This is a test</p>
                <input type='file' id='multi' />
            </div>
            
        );
    }
}

export default Main;