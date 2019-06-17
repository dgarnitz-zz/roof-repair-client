import React, { Component } from 'react';
import Header from '../components/Header';
import Spinner from '../components/Spinner';
import Uploader from '../components/Uploader';

class Main extends Component {
    render(){
        return (
            <div>
                <Header />
                <Uploader />
            </div>
            
        );
    }
}

export default Main;