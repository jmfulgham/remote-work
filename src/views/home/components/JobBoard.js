import React, {Component} from 'react';
import MUIDataTable from "mui-datatables";
import RemoteOkService from '../../../services/RemoteOkService';
import GitHubService from "../../../services/GitHubService";
import StackOverflowService from "../../../services/StackOverflowService";

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
        this.gitHubService = new GitHubService();
        this.stackOverflowService = new StackOverflowService();
        this.columns = ['Position', 'Company', 'Source', 'Focus', 'Apply'];
    };


    async componentDidMount() {
        let remoteOkJobs = await this.remoteOkService.getRemoteOkJobs();
        let githubJobs = await this.gitHubService.getAllGitHubRemoteJobs();
        let stackOverflowJobs = await this.stackOverflowService.getStackOverflowJobs();
        this.setState({jobs: {remoteOkJobs, githubJobs, stackOverflowJobs}});
        console.log(this.state.jobs.remoteOkJobs);
    }
//add remote ok logo to state
    render() {
        return (
            <div style={styles.container}>
                <MUIDataTable
                    title={"Job Board"}
                    columns={this.columns}
                />
            </div>
        )
    }
}