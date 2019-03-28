import React, {Component} from 'react';
import Header from './Header';
import SearchBar from './SearchBar'
import JobBoard from './JobBoard'
import Grid from '@material-ui/core/Grid';
import WelcomeMessage from "./WelcomeMessage";

const styles = {
    parent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flexGrow: '1'
    },
};

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
            <div style={styles.parent}>
                <Grid container direction="column"
                      alignItems="center" justify="space-around">
                    <Grid item xs={12}>
                        <Header/>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <WelcomeMessage />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <SearchBar searchTerm={this.handleSearch} />
                    </Grid>
                    <Grid item xs={10} sm={6}>
                        <JobBoard search={this.state.searchTerm} />
                    </Grid>
                </Grid>
            </div>
        )
    }
};
