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
    render() {
        return (
            <div className="parentContainer" style={styles.parent}>
                <div className="body" >
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
