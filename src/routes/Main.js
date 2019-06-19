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

    onDrop = event => {
        console.log("uploading image", event.target.files[0])
        this.setState({
            pictures: this.state.pictures.concat(event.target.files[0]),
        });
        this.getPrice(event, event.target.files[0]);
    }

    /* Need error handling here so nothing happens if the user clicks this button before uploading */
    getPrice = (event, file) =>{
        var formData = new FormData(this.refs.myForm);
        formData.append("myImage", file);
        event.preventDefault();

        // console.log(this.state.pictures);
        fetch("http://localhost:5000/upload/photo", {
            method: 'POST',
            // headers: {
            //     "Content-Type": "multipart/form-data",
            //     "Accept": "application/json",
            //     "type": "formData"
            // },
            body: formData
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