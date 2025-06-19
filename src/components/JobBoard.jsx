import React, { useEffect, useState } from "react";
import { useGetRemoteOkJobs } from "../hooks/RemoteOkHooks.js";

import moment from "moment";
import JobCard from "./JobCard/JobCard.jsx";
import { useGetWeWorkRemotelyJobs } from "../hooks/WeWorkRemotelyHooks.js";

moment().format("MMM Do YY");

const styles = {
  arrow: {
    color: "#27C4A8",
  },
 parentContainer: {
    margin: "auto"
 },
  childContainer: {
    justifyContent: "center"
  },
  error: {
    marginTop: "1rem",
    color: "red"
  }
};

const JobBoard = ({ searchTerm, setIsSearchError }) => {
  const [jobsList, setJobsList] = useState([]); // displayed list
  const [originalJobList, setOriginalJobList] = useState([]); // source of truth for comparison
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(true);

  useEffect(() => {
    (async () => {
      const { jobs, error, loading } = await useGetRemoteOkJobs();
      const { jobs: wwRemotelyJobs, error: wwRemotelyError } =
        await useGetWeWorkRemotelyJobs();
      if (loading) setIsLoading(true);
      if (error.message || wwRemotelyError.message) setIsError(true);
      if (jobs.length || wwRemotelyJobs.length) {
        const newList = jobs.concat(wwRemotelyJobs);
        newList.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
        );
        setJobsList(newList);
        setOriginalJobList(newList);
      }
    })();
  }, []);

  useEffect(() => {
    const sanitizedSearch = searchTerm.trim().toLowerCase();
    if (sanitizedSearch.length > 0) {
      const results = originalJobList.filter((job) =>
        job.position.toLowerCase().includes(sanitizedSearch),
      );
      if (results.length > 0) {
        setIsSearchError(false);
        setJobsList(results);
      } else {
        setIsSearchError(true);
        setJobsList([]); // Clear the list if no match
      }
    } else {
      // Search cleared & reset list
      setIsSearchError(false);
      setJobsList(originalJobList);
    }
  }, [searchTerm]);

  return (
    <div className="parent-job-container" style={styles.parentContainer}>
      {isError && isLoading && <div style={styles.error}>There was a problem grabbing the jobs, please refresh the page</div>}
      {isLoading ? (
        <div> Loading </div>
      ) : searchTerm && jobsList.length  === 0 ? (
        <div>Please try your search again</div>
      ) : (
        <div className={"child-job-container"} style={styles.childContainer}>
          {jobsList.map((job, i) => (
            <JobCard job={job} index={i} />
          ))}
        </div>
      )}
    </div>
  );
};

export default JobBoard;
