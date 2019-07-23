import React from 'react';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input'

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
                <form style={layout}>
                    <Grid item xs={12}>
                        <FormControl margin="dense">
                            <Input
                            type="button"
                            value="Too high" 
                            name="high"
                            onClick={props.reinforceLearning}
                            style={spacing}
                            />
                        </FormControl>
                        <FormControl margin="dense">
                            <Input
                            type="button" 
                            name="accurate"
                            value="Accurate" 
                            onClick={props.reinforceLearning} 
                            style={spacing}
                            />
                        </FormControl>
                        <FormControl margin="dense">
                            <Input 
                            type="button"
                            value="Too low" 
                            name="low"
                            color="primary" 
                            variant = "contained" 
                            onClick={props.reinforceLearning}
                            style={spacing}
                            />
                        </FormControl>
                    </Grid>
                </form>
            </Grid>
        </div>
    );
}