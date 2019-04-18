import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
        display: 'flex',
    },
    footer: {
        height: '10rem',
        color: '#ffffff',
        backgroundColor: '#202020',

    }

});

function Footer(props) {
    const {classes} = props;

    return (
        <Grid container
        direction = "row">
            <Grid item xs={12} sm={10} >
                <footer >
                    <section className={classes.footer}>"Yah Ya"</section>
                </footer>
            </Grid>
        </Grid>)

}

export default withStyles(styles)(Footer)