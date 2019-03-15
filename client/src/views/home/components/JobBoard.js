import React, {Component} from 'react';
import RemoteOkService from '../../../services/RemoteOkService';
import GitHubService from "../../../services/GitHubService";
import StackOverflowService from "../../../services/StackOverflowService";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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
        this.state = {
            jobsLoading: true,
            jobs: []
        }
        this.remoteOkService = new RemoteOkService();
        this.gitHubService = new GitHubService();
        this.stackOverflowService = new StackOverflowService();
        this.columns = ['Date','Position', 'Company', 'Source', 'Apply'];
    };


    async componentDidMount() {
        let remoteOkJobs = await this.remoteOkService.getRemoteOkJobs();
        let githubJobs = await this.gitHubService.getAllGitHubRemoteJobs();
        // let stackOverflowJobs = await this.stackOverflowService.getStackOverflowJobs();
        let jobsList = githubJobs.concat(remoteOkJobs);
        this.setState({jobs: jobsList, jobsLoading: false});
        // console.log(this.state.jobs)
    };

    render() {
        let jobs = this.state.jobs;
        return (<div style={styles.container}>
                {jobs.length === 0 && this.state.jobsLoading === false ? <div>Loading...</div> :
                    <Paper>
                        <Table>
                            <TableHead>
                                {this.columns.map(
                                    column => (
                                        <TableCell
                                            align="left"
                                            padding="default"
                                        >{column}
                                        </TableCell>))}
                            </TableHead>
                            <TableBody>
                                    {jobs.map(job => (
                                        <TableRow key={job.id}>
                                            <TableCell component="th" scope="row">
                                                {job.Date}
                                            </TableCell>
                                            <TableCell align="left">{job.Position}</TableCell>
                                            <TableCell align="left">{job.Company}</TableCell>
                                            <TableCell align="left">{job.Source}</TableCell>
                                            <TableCell align="left">{job.Apply}</TableCell>
                                        </TableRow>
                                        ))}
                            </TableBody>
                            </Table></Paper>

                }
            </div>
        )
    }
}