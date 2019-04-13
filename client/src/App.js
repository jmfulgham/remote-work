import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Home from './views/home/components/Home';
import Header from './views/home/components/Header';
import PostJobPage from './views/posting/PostJobPage';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Grid container direction="column"
                      alignItems="center" justify="space-around">
                    <Grid item xs={12}>
                    <Header/>
                    </Grid></Grid>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/post-job" component={PostJobPage} />
            </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
