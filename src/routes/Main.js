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

    /* Need error handling here so nothing happens if the user clicks this button before uploading */
    getPrice(){
        console.log(this.state.pictures);
        fetch("http://localhost:5000/", {
            method: 'POST',
            body: this.state.pictures
        }).then(
            response => response.json()
          ).then(
            (success) => {
                console.log(success) // Handle the success response object
                this.setState({price: success.price}) 
                console.log(this.state.price)
            } 
          ).catch(
            error => console.log(error)
          );

        console.log("resetting state")
        this.setState({pictures: [] })
        console.log(this.state.pictures)
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