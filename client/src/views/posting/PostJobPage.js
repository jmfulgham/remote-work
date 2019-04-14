import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import JobTextEditor from './JobTextEditor';

const styles = {

    container: {
        display: 'flex',
        flexDirection: 'column',
        margin: '4rem 0.75rem 0 0.75rem'
    },
    title: {
        marginTop: '25%'
    }
};

export default class PostJobPage extends Component {

    render() {
        return (
            <div className="parent" style={styles.container}>
                <Grid container direction="column"
                      alignItems="center" justify="space-around">
                    <Grid item xs={12} sm={6}>
                        <div className="text-description" style={styles.title}>
                            <section>
                                <Typography variant="h1">Post a Job</Typography>
                            </section>
                            <section>
                                <Typography variant="h5" color="secondary"> Looking for talent? Post your position below!</Typography>
                            </section>
                        </div>
                        <JobTextEditor/>
                    </Grid>
                </Grid>
            </div>)
    }

}