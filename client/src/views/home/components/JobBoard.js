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
// import Markdown from 'markdown-to-jsx';

const parse = require('html-react-parser');
//TODO handle github Job formatting separately???


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
            expanded: false
        };
        this.remoteOkService = new RemoteOkService();
        this.gitHubService = new GitHubService();
        this.stackOverflowService = new StackOverflowService();
        this.columns = ['Date','Position', 'Company', 'Source', 'Apply'];
    };


    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };

    async componentDidMount() {
        let remoteOkJobs = await this.remoteOkService.getRemoteOkJobs();
        let githubJobs = await this.gitHubService.getAllGitHubRemoteJobs();
        let stackOverflowJobs = await this.stackOverflowService.getStackOverflowJobs();
        let jobsList = githubJobs.concat(remoteOkJobs, stackOverflowJobs);
        this.setState({jobs: jobsList, jobsLoading: false});
    };

    render() {
        const { expanded } = this.state;
        let jobs = this.state.jobs;
        return (<div style={styles.container}>
                {jobs.length === 0 && this.state.jobsLoading === true ? <div> <Typography variant="display3">Loading...</Typography></div> :
                    <Paper>
                        <Table>
                            <TableBody>
                                    {jobs.map(job => (
                                        <ExpansionPanel expanded={expanded === job.id} onChange={this.handleChange(job.id)}>
                                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon style={styles.arrow}/>} style={styles.expand}> <TableRow key={job.id}>
                                                <Typography variant="display1">{job.Position}-{job.Company}</Typography><Typography variant="subtitle1">
                                                {moment(job.Date).format("MMM Do YYYY")}
                                            </Typography>
                                            </TableRow>
                                            </ExpansionPanelSummary>
                                            <ExpansionPanelDetails>
                                                <Typography variant='body2'>
                                                    {/*<Markdown>{job.Description}</Markdown>*/}
                                                    {parse(`${job.Description}`)}
                                                </Typography>
                                            </ExpansionPanelDetails>
                                            <Divider />
                                            <ExpansionPanelActions>
                                                <Button size="small" color="secondary" href={job.Apply}>
                                                    Apply
                                                </Button>
                                            </ExpansionPanelActions>
                                        </ExpansionPanel>
                                        ))}
                            </TableBody>
                            </Table></Paper>

                }
            </div>
        )
    }
}