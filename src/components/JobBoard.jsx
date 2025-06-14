import React, {useEffect, useState} from 'react';
import {useGetRemoteOkJobs} from '../hooks/RemoteOkHooks.js';


import moment from 'moment';
import JobCard from "./JobCard/JobCard.jsx";

moment().format("MMM Do YY");

// require('typeface-questrial');
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
    text: {
        maxWidth: '100%'
    }
};

const JobBoard = ({search}) => {

    const [jobsList, setJobsList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        (async () => {
           const {jobs, error, loading} = await useGetRemoteOkJobs()
            if(loading)setIsLoading(true)
            if(error)setIsError(true)
           if(jobs.length) setJobsList(jobs);
            // jobsList.sort((a,b)=> new Date(b.Date).getTime() - new Date(a.Date).getTime());

        })()

    }, []);

     // const handleSearch = () => {
     //     let searchJob = [];
     //     let search = this.props.search.toLowerCase();
     //    jobsList.forEach(job => {
     //         if (job.Position.toLowerCase().includes(search)) {
     //             searchJob.push(job);
     //         }
     //     });
     //     return searchJob;
     // };
     //
     // if (search !== "" || search !== undefined) {
     //     const response = handleSearch()
     //     setJobsList(response)
     // }

    return (<div className="parent-job-container">
            {jobsList.length === 0 || isLoading ? <div> Loading </div>
                : (<div className={"child-job-container"}>
                    {jobsList.map((job, i) =>(
                        <JobCard job={job} key={job.id}/>
                    ))}
                </div>
                )}
                </div>)

}

export default JobBoard;
