import React from "react";
import "./styles.css";
import { Button } from "@mui/material";

const JobCard = ({ job, index }) => {
  const { company, position, salary_min, salary_max, url, date, tags, id } =
    job;
  const jobDate = new Date(date);
  const today = new Date();
  const jobAge = Math.floor(
    (today.getTime() - jobDate.getTime()) / (1000 * 60 * 60 * 24),
  );

  const handleJobAge = (age) => {
    if (age === 0) {
      return "Today";
    }
    if (age === 1) return "Yesterday";
    if (age > 1) return `${age} Days Ago`;
    if (age >= 30) {
      const currentMonth = today.getMonth();
      const jobMonth = jobDate.getMonth();
      const monthDifference = currentMonth - jobMonth;
      return `${monthDifference} ago`;
    }
  };

  return (
    <div className={"job-card"} key={index} >
      <div className={"job-card-header"}>
        <h4 className={"company-name"}>{company}</h4>
        <p className={"job-post-date"}>{handleJobAge(jobAge)}</p>
      </div>
      <div className={"job-details"}>
        <h3>{position}</h3>
        {tags && (
          <div className={"tag-container"}>
            {tags.slice(0, 4).map((tag) => (
              <div className={"tag-list"}>{tag}</div>
            ))}
          </div>
        )}
      </div>
      <div className={"apply-container"}>
        {salary_min && salary_max ? (
          <h5>
            Salary range ${salary_min} - ${salary_max}
          </h5>
        ) : salary_min && !salary_max ? (
          <h5>Salary starts at ${salary_min}</h5> ? (
            !salary_min && salary_max
          ) : (
            <h5>Range ends at ${salary_max}</h5>
          )
        ) : null}
        <a target="_blank" href={url}>
          <Button
            className={"btn"}
            color={"secondary"}
            size="small"
            variant={"outlined"}
          >
            Apply Now
          </Button>
        </a>
      </div>
    </div>
  );
};

export default JobCard;
