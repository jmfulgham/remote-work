import React, {Component} from 'react';
import RemoteOkService from '../../../services/RemoteOkService';
import GitHubService from "../../../services/GitHubService";
import StackOverflowService from "../../../services/StackOverflowService";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import Typography from '@material-ui/core/Typography';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

const parse = require('html-react-parser');


const moment = require('moment');
moment().format("MMM Do YY");

require('typeface-questrial');
const styles = {
    arrow: {
        color: "#27C4A8"
    },
    container: {
        padding: '3rem 3rem 3rem 3rem'
    },
    header: {
        backgroundColor: '#efcafc'
    },
    expand: {
        padding: '2rem'
    }
};


export default class JobBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobsLoading: true,
            jobs: [],
            expanded: false,

        };
        this.remoteOkService = new RemoteOkService();
        this.gitHubService = new GitHubService();
        this.stackOverflowService = new StackOverflowService();
    };


    async componentDidMount() {
        let remoteOkJobs = await this.remoteOkService.getRemoteOkJobs();
        let githubJobs = await this.gitHubService.getAllGitHubRemoteJobs();
        let stackOverflowJobs = await this.stackOverflowService.getStackOverflowJobs();
        let jobsList = githubJobs.concat(remoteOkJobs, stackOverflowJobs);
        this.setState({jobs: jobsList, jobsLoading: false});
    };


    handleSearch = () => {
        let searchJob = [];
        let search = this.props.search.toLowerCase();
        this.state.jobs.forEach(job => {
            if (job.Position.toLowerCase().includes(search)) {
                searchJob.push(job);
            }
        });
      return searchJob;
    };

    render() {
        let jobs;
        if(this.props.search){
            jobs = this.handleSearch();
        }else {
            jobs = this.state.jobs;
        }


        return (<div style={styles.container}>
                {jobs.length === 0 && this.state.jobsLoading === true ?
                    <div><Typography variant="display3">Finding Jobs...</Typography></div> :
                    <Paper>
                        <Table>
                            <TableBody>
                                { jobs.map(job => (
                            <ExpansionPanel>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon style={styles.arrow}/>}
                                                       style={styles.expand}> <TableRow key={job.id}>
                                    <Typography
                                        variant="h3">{job.Position} {job.Company}</Typography><Typography
                                    variant="subtitle1">
                                    {moment(job.Date).format("MMM Do YYYY")}
                                </Typography>
                                </TableRow>
                                </ExpansionPanelSummary>
                                <ExpansionPanelActions
                                    style={{justifyContent: 'flex-start', paddingLeft: '1.5rem'}}>

                                    <Button color="secondary" variant="contained" href={job.Source}
                                            target="_blank">
                                        Apply</Button>

                                </ExpansionPanelActions>
                                <Divider/>
                                <ExpansionPanelDetails>
                                    <Typography variant='body2'>
                                        {parse(`${job.Description}`)}
                                    </Typography>
                                </ExpansionPanelDetails>
                                <Divider/>
                                <ExpansionPanelActions
                                    style={{justifyContent: 'flex-start', paddingLeft: '1.5rem'}}>

                                    <Button color="secondary" variant="contained" href={job.Source}
                                            target="_blank">
                                        Apply</Button>

                                </ExpansionPanelActions>
                            </ExpansionPanel>
                        ))
                                }


                            </TableBody>
                        </Table></Paper>

                }
            </div>
        )
    }
}