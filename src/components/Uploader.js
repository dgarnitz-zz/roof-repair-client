import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';

/* This uses the react-image-upload component, created by Jake Hartnell
 https://github.com/jakehartnell/react-images-upload#readme */

 const layout = {
     padding: '16px',
     margin: '40px'
 };
 
class Uploader extends Component {
    render() {
        return (
            <Grid
            container
            spacing={10}
            direction="column"
            justify="space-evenly"
            alignItems="center"
            >
                <div style={layout}>
                    <form encType="multipart/form-data" ref="myForm">
                        <Grid item xs={12}>
                            <Typography variant="h6" paragraph={true}>
                                Please select a picture
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Input type="file" name="myImage" onChange={this.props.onDrop} accept="image/*"/>
                        </Grid>
                        {/* <Grid item xs={12}>
                            <input type="file" name="myImage" onChange={this.props.onDrop} accept="image/*" />
                        </Grid> */}
                    </form>
                </div>
            </Grid>
        );
    }
}

export default Uploader;