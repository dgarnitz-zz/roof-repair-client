import React, { Component } from 'react';
import Header from '../components/Header';
import Uploader from '../components/Uploader';
import Price from '../components/Price';

class Main extends Component {
    constructor(props) {
        super(props);
         this.state = { pictures: [],
                        price: 0 }; 
         this.onDrop = this.onDrop.bind(this);
         this.getPrice = this.getPrice.bind(this);
         this.Uploader1 = React.createRef();
    }

    onDrop = event => {
        console.log("uploading image", event.target.files[0])
        const currentUploader = this.Uploader1.current;
        console.log("sending form data", currentUploader.state)
        this.getPrice(event, event.target.files[0]);
    }

    

    getPrice = (event, file) =>{
        var formData = new FormData(this.refs.myForm);
        formData.append("myImage", file);
        // formData.append("")
        event.preventDefault();

            (async () => {
                let response = await fetch("http://localhost:5000/upload/photo", {
                                method: 'POST',
                                body: formData
                            });
                let data = await response.json();
                this.setState({price: data.price}); 
                console.log(this.state.price);
            })();

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
                <Uploader onDrop={this.onDrop} ref={this.Uploader1} />
                {price}
            </div> 
        );
    }
}

export default Main;