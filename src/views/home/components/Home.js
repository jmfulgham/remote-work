import React, {Component} from 'react';
import Header from './Header';
import Search from './Search'
import JobBoard from './JobBoard'
const styles = {
    parent: {
        display: 'flex',
    }
};

export default class Home extends Component {
    render() {
        return (
            <div className="parentContainer">
                <div className="body" style={styles.parent}>
                    <Header/>
                </div>
                <div className="search">
                    <Search/>
                </div>
                <div className="job-board">
                    <JobBoard />
                </div>
            </div>
        )
    }
};
