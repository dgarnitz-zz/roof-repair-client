import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import BuildIcon from "@material-ui/icons/Build";

class Header extends Component {
    render(){
        const layout = {
            width: 'auto',
            marginLeft: 16,
            marginRight: 16,
            marginTop: 16
        };

        return (
            <div>
                <AppBar position="static" color="default" >
                    <Toolbar>
                        <Typography variant="h6" color="inherit" >
                            Roof Contract Pricing Tool
                        </Typography>
                        <BuildIcon />
                    </Toolbar>
                </AppBar>

                <div style={layout}>
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    Roof Contract Pricing Tool
                </Typography>
                <Typography variant="h6" align="center" color="textSecondary" component="p">
                    Find out the cost of replacing a roof by simply uploading a picture!
                </Typography>
                </div>
            </div>
        );
    }
}

export default Header;