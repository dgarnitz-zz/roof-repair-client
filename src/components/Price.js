import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function Price (props){
    const layout = {
        width: 'auto',
        marginLeft: 32,
        marginRight: 32,
        marginTop: 32
    };

    return (
        <div style={layout}>
            <Typography variant="h6" >
                The price per square meter to refurbish this roof is £{props.price}
            </Typography>
        </div>
    );
}