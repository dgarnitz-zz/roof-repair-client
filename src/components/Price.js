import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import EstimateEvaluator from './EstimateEvaluator';

export default function Price (props){
    const layout = {
        width: 'auto',
        margin: 32
    };

    const margin = {
        marginBottom: 24
    };

    return (
        <div style={layout}>
            <Typography variant="h6" style={margin}>
                The bid price per square meter to replace this roof is £{props.price}
            </Typography>
            <EstimateEvaluator reinforceLearning={props.reinforceLearning} />
            <Typography variant="h6" style={margin}>
                Or:
            </Typography>
            <Button color="primary" variant = "contained" href="/">
                Price another contract
            </Button>
        </div>
    );
}