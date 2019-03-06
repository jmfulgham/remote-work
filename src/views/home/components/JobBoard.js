import React, {Component} from 'react';
import MUIDataTable from "mui-datatables";

const styles = {
    container: {
        padding: '3rem 3rem 3rem 3rem'
    },
    header: {
        backgroundColor: '#efcafc'
    }
};


export default class JobBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.columns = ['Job Title', 'Company', 'Source', 'Focus', 'Apply'];
    };



    render() {
        return (
            <div style={styles.container}>
                <MUIDataTable
                    title={"Job Board"}
                    columns={this.columns}/>
            </div>
        )
    }
}