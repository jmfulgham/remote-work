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
import WeWorkRemotelyService from "../../../services/WeWorkRemotelyService";

const parse = require('html-react-parser');


const moment = require('moment');
moment().format("MMM Do YY");

require('typeface-questrial');
const styles = {
    arrow: {
        color: "#27C4A8"
    },
    date: {
        display: 'flex',
        width: '100%',
        alignSelf: 'flex-end',
        justifyContent: 'flex-end',
    },
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
        this.weWorkRemotelyService = new WeWorkRemotelyService();
    };


    async componentDidMount() {
        let remoteOkJobs = await this.remoteOkService.getRemoteOkJobs();
        let githubJobs = await this.gitHubService.getAllGitHubRemoteJobs();
        let stackOverflowJobs = await this.stackOverflowService.getStackOverflowJobs();
        let weWorkRemotelyJobs = await this.weWorkRemotelyService.concatAndFormatFeed();
        let jobsList = githubJobs.concat(remoteOkJobs, stackOverflowJobs, weWorkRemotelyJobs);
        jobsList.sort((a,b)=> new Date(b.Date).getTime() - new Date(a.Date).getTime());
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


        return (<div className="parent-job-container">

                {jobs.length === 0 && this.state.jobsLoading === true ?
                    <div className={'finding-jobs'}>
                        <Typography variant="h2">Finding
                            Jobs...</Typography></div> :
                    <div className={"child-job-container"}>
                        {jobs.map(job => (
                            <ExpansionPanel>
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon style={styles.arrow}/>}>
                                    <Typography
                                        variant="h5">{job.Position} {job.Company}</Typography>
                                    <div className="date" style={styles.date}><Typography
                                        variant="subtitle1"
                                        style={styles.date}>
                                        {moment(job.Date).format("MMM Do")}
                                    </Typography></div>
                                </ExpansionPanelSummary>
                                <Divider/>
                                <ExpansionPanelActions
                                    style={{justifyContent: 'flex-start', paddingLeft: '1.5rem'}}>

                                    <Button color="secondary" variant="contained" href={job.Source}
                                            target="_blank" role="button" aria-pressed="false">
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
                            </ExpansionPanel>

                        ))
                        }
                    </div>
                }
            </div>
        )
    }
}