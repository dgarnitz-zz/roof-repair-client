import React, { Component } from 'react';
import ImageUploader from 'react-images-upload';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

{/* This uses the react-image-upload component, created by Jake Hartnell
 https://github.com/jakehartnell/react-images-upload#readme */}

 const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    }
  }));
 
class Uploader extends Component {
 
    constructor(props) {
        super(props);
         this.state = { pictures: [] };
         this.onDrop = this.onDrop.bind(this);
         this.getPrice = this.getPrice.bind(this);
    }
 
    
    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }

    /* This will probably need to be moved to the parent so the data it receives back and be rendered */
    getPrice(){
        console.log(this.state.pictures);
        this.setState({pictures: [] })
    }

    
 
    render() {

        return (
            <Grid container className={useStyles.root} spacing={2}>
                <Grid item xs={12}>
                    <ImageUploader
                        withIcon={true}
                        buttonText='Choose image'
                        onChange={this.onDrop}
                        imgExtension={['.jpg', '.gif', '.png', '.gif']}
                        maxFileSize={5242880}
                        label="Max file size: 5mb, formats accepted: jpg, gif, png"
                    />
                </Grid>
                <Grid item xs={12}>
                    <Fab variant="extended" onClick = {this.getPrice}>
                        Get price!
                    </ Fab>
                </Grid>
            </Grid>
        );
    }
}

export default Uploader;