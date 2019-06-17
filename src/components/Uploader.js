import React, { Component } from 'react';
import ImageUploader from 'react-images-upload';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

/* This uses the react-image-upload component, created by Jake Hartnell
 https://github.com/jakehartnell/react-images-upload#readme */

 const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    }
  }));
 
class Uploader extends Component {
    render() {
        return (
            <Grid container className={useStyles.root} spacing={2}>
                <Grid item xs={12}>
                    <ImageUploader
                        withIcon={true}
                        buttonText='Choose image'
                        onChange={this.props.onDrop}
                        imgExtension={['.jpg', '.gif', '.png', '.gif']}
                        maxFileSize={5242880}
                        label="Max file size: 5mb, formats accepted: jpg, gif, png"
                    />
                </Grid>
                <Grid item xs={12}>
                    <Fab variant="extended" onClick = {this.props.getPrice}>
                        Get price!
                    </ Fab>
                </Grid>
            </Grid>
        );
    }
}

export default Uploader;