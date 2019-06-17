import React, { Component } from 'react';
import Header from '../components/Header';
import Spinner from '../components/Spinner';
import Uploader from '../components/Uploader';
import Price from '../components/Price';

class Main extends Component {
    constructor(props) {
        super(props);
         this.state = { pictures: [],
                        price: 0 }; 
         this.onDrop = this.onDrop.bind(this);
         this.getPrice = this.getPrice.bind(this);
    }

    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }

    getPrice(){
        console.log(this.state.pictures);
        this.setState({pictures: [] })
    }

    render(){

        var price;
        if (this.state.price === 0){
            price = null;
        } else {
            price = <Price price={this.state.price} />;
        }

        return (
            <div>
                <Header />
                <Uploader onDrop={this.onDrop} getPrice={this.getPrice} />
                {price}
            </div>
            
        );
    }
}

export default Main;