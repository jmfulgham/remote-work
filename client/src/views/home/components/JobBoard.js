import React, {Component} from 'react';
import RemoteOkService from '../../../services/RemoteOkService';
import GitHubService from "../../../services/GitHubService";
import StackOverflowService from "../../../services/StackOverflowService";
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import TableBody from "@material-ui/core/TableBody";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";

const parse = require('html-react-parser');


const moment = require('moment');
moment().format("MMM Do YY");

require('typeface-questrial');
const styles = {
    arrow: {
        color: "#27C4A8"
    },
    date: {
        display: 'inline-flex',
        alignItems: 'center'
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
        if (this.props.search) {
            jobs = this.handleSearch();
        } else {
            jobs = this.state.jobs;
        }


        return (<div className="job-container">
            {jobs.length === 0 && this.state.jobsLoading === true ?
                <div>
                    <Grid container spacing={24} direction="column" className={"child-job-grid"} alignItems={"center"}>
                        <Grid item xs={8} direction={"row"} justify={"space-around"}><Typography variant="h2">Finding
                            Jobs...</Typography></Grid></Grid></div>:
                <Table>
                <TableBody>
                {jobs.map(job => (
                    <Grid container spacing={24} direction="column" className={"child-job-grid"} alignItems={"center"}>
                        <Grid item xs={8} direction={"row"} justify={"space-around"}>
                            <ExpansionPanel>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon style={styles.arrow}/>}>
                                    <Grid item> <TableRow key={job.id}>
                                        <Typography
                                            variant="h4">{job.Position} {job.Company}</Typography>
                                        <Typography
                                            variant="subtitle1"
                                            style={styles.date}>
                                            {moment(job.Date).format("MMM Do")}
                                        </Typography></TableRow></Grid>
                                </ExpansionPanelSummary>
                                <Divider/>
                                <ExpansionPanelActions
                                    style={{justifyContent: 'flex-start', paddingLeft: '1.5rem'}}>

                                    <Button color="secondary" variant="contained" href={job.Source}
                                            target="_blank">
                                        Apply</Button>

                                </ExpansionPanelActions>
                                <ExpansionPanelDetails>
                                    <Typography variant='body1'>
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
                            </ExpansionPanel></Grid>
                    </Grid>
                ))
                }</TableBody></Table>



                }
                </div>
                )
                }
                }