import React from "react";
import { Typography, useTheme } from "@mui/material";

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    height: "15rem",
    margin: "3rem 0.75rem 0 0.75rem",
  },
  text: {
    alignSelf: "center",
    textAlign: "center",
  },
};

const WelcomeMessage = () => {
  const theme = useTheme();
  return (
    <div className="welcome-message-container" style={styles.container}>
      <div className="welcome-message" style={styles.text}>
        <Typography color={"secondary"} paragraph={true} variant={"h4"}>
          remoteWork(tech) is your favorite resource for all remote based tech
          jobs
        </Typography>
      </div>
    </div>
  );
};

export default WelcomeMessage;
