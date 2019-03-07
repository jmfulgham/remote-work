import React, {Component} from 'react';
import MUIDataTable from "mui-datatables";
import RemoteOkService from '../../../services/RemoteOkService';

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
        this.remoteOkService = new RemoteOkService();
        this.columns = ['Job Title', 'Company', 'Source', 'Focus', 'Apply'];
    };

 async componentDidMount(){
    let remoteOkJobs= await this.remoteOkService.getRemoteOkJobs();
    this.setState({remoteOkJobs});
    console.log(this.state);
}

    render(){
        return (
            <div style={styles.container}>
                <MUIDataTable
                    title={"Job Board"}
                    columns={this.columns}/>
            </div>
        )
    }
}