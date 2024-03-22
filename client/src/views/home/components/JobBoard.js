import React, {useEffect, useState} from 'react';
import {useGetRemoteOkJobs} from '../../../services/RemoteOkService';
import {useGetAllGitHubRemoteJobs} from "../../../services/GitHubService";
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import {useGetWeWorkRemotelyJobs} from "../../../services/WeWorkRemotelyService";
import Lottie from 'react-lottie';
import animationData from '../../../loading-animation';
import Grid from '@material-ui/core/Grid';

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
    text:{
        maxWidth: '100%'
    }
};

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
    },
};

export const JobBoard = (props) => {
    const [jobsState, setJobsState] = useState({
        jobsLoading: true,
        jobs: localStorage.getItem("jobs") ? JSON.parse(localStorage.getItem("jobs")) : [],
        expanded: false,
    });

    useEffect(() => {
        (async()=>{
            let jobsList = [];
            let remoteOkJobs = await useGetRemoteOkJobs();
            console.log({remoteOkJobs})
            // let weWorkRemotelyJobs = await useGetWeWorkRemotelyJobs();
            jobsList.concat(remoteOkJobs);

            console.log({jobsList})
            jobsList.sort((a,b)=> new Date(b.Date).getTime() - new Date(a.Date).getTime());
            setJobsState({...jobsState, jobs: jobsList, jobsLoading: false});
        })()

    }, []);


   const handleSearch = () => {
        let searchJob = [];
        let search = this.props.search.toLowerCase();
        jobsState.jobs.forEach(job => {
            if (job.Position.toLowerCase().includes(search)) {
                searchJob.push(job);
            }
        });
        return searchJob;
    };

        if (props.search) {
            const response = handleSearch()
            setJobsState({...jobsState, jobs:response});
        }

        return (<div className="parent-job-container">
                {jobsState.jobs.length === 0 && jobsState.jobsLoading === true ?
                        <Grid container direction="row"
                              alignItems="center" justify="center">
                                <Lottie options={defaultOptions}
                                        height={300}
                                        width={300}
                                />
                            </Grid>
                     :
                    <div className={"child-job-container"}>
                        {jobsState.jobs.map(job => (
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
                                    <div style={styles.text}>
                                    <Typography variant='body1'>
                                        {parse(`${job.Description}`)}
                                    </Typography></div>
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


export default JobBoard;