import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import { InputLabel } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';

/* This uses the react-image-upload component, created by Jake Hartnell
 https://github.com/jakehartnell/react-images-upload#readme */

 const layout = {
     padding: '16px',
     margin: '40px'
 };

 const margin = {
   marginTop: '24px'  
 };

 {/* https://codesandbox.io/s/ty0o2 
    Use this to wire up the form elements */}
 
class Uploader extends Component {
    render() {

        function handleChange(event) {
            setValues(oldValues => ({
              ...oldValues,
              [event.target.name]: event.target.value,
            }));
          }

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
                            <InputLabel htlmFor="location" style={margin}>County</InputLabel>
                            <Select 
                                inputProps={{id: 'location'}} 
                                style={margin}
                                
                            >
                                    <MenuItem value={"Fife"}>Fife</MenuItem>
                                    <MenuItem value={"Tayside"}>Tayside</MenuItem>
                            </Select>
                        </Grid> 
                        <Grid item xs={12}>
                            <InputLabel htlmFor="season" style={margin}>Time of Year</InputLabel>
                            <Select inputProps={{id: 'season'}} style={margin}>
                                <MenuItem value={"winter"}>winter</MenuItem>
                                <MenuItem value={"autumn"}>autumn</MenuItem>
                                <MenuItem value={"summer"}>summer</MenuItem>
                                <MenuItem value={"spring"}>spring</MenuItem>
                            </Select>
                        <Grid item xs={12}>
                            <Typography variant="h6" paragraph={true} style={margin}> 
                                Please select a picture
                            </Typography>
                        </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Input type="file" name="myImage" onChange={this.props.onDrop} accept="image/*"/>
                        </Grid>
                    </form>
                </div>
            </Grid>
        );
    }
}

export default Uploader;