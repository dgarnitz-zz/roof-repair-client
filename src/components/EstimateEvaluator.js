import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

export default function EstimateEvaluator (props){
    const layout = {
        width: 'auto',
        marginTop: 24,
        marginBottom: 24
    };

    const margin = {
        marginBottom: 24,
    };

    const spacing = {
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 16
    };

    function handleClick() {
        props.reinforceLearning()
    }

    return (
        <div style={layout}>
            <Typography variant="h6" style={margin}>
                Was this price estimate: 
            </Typography>
            <Grid
            container
            spacing={10}
            direction="column"
            justify="space-evenly"
            alignItems="center"
            >
                <Grid item xs={9}>
                    <Button 
                    name="high"
                    color="primary" 
                    variant = "contained" 
                    onClick={props.reinforceLearning}
                    style={spacing}>
                        Too High
                    </Button>
                    <Button 
                    name="accurate"
                    color="primary" 
                    variant = "contained" 
                    onClick={props.reinforceLearning}
                    style={spacing}>
                        Accurate
                    </Button>
                    <Button 
                    name="low"
                    color="primary" 
                    variant = "contained" 
                    onClick={props.reinforceLearning}
                    style={spacing}>
                        Too Low
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}