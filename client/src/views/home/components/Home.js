import React, {Component} from 'react';
import Header from './Header';
import SearchBar from './SearchBar'
import JobBoard from './JobBoard'
import Grid from '@material-ui/core/Grid';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        }
    }

    handleSearch = input => {
        this.setState({searchTerm: input});
    };

    render() {
        return (
            <div>
                <Grid container spacing={24}>
                    <Grid item>
                        <Header/>
                    </Grid>
                </Grid>

                <Grid container spacing={24} direction="column"
                      alignItems="center">
                    <Grid item xs={8} sm={12} justify="center"
                          alignItems="space-around">
                        <SearchBar searchTerm={this.handleSearch}/>
                    </Grid>
                        <JobBoard search={this.state.searchTerm}/>
                </Grid>
            </div>

        )
    }
};
