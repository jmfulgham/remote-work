import React, {Component} from 'react';
import Header from './Header';
import Search from './Search'
import JobBoard from './JobBoard'

const styles = {
    parent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
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
            <div className="parentContainer" style={styles.parent}>
                <div className="body">
                    <Header/>
                </div>
                <div className="search">
                    <Search searchTerm={this.handleSearch}/>
                </div>
                <div className="job-board">
                    <JobBoard search={this.state.searchTerm}/>
                </div>
            </div>
        )
    }
};
