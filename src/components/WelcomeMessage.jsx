import React from "react";
import { Typography, useTheme } from "@mui/material";

const styles = {
  container: {
    height: "10rem",
    width: "60%",
    marginTop: "5rem",
    alignSelf: "center"
  },
  text: {
    textAlign: "center",
  },
};

const WelcomeMessage = () => {
  return (
    <div className="welcome-message-container" style={styles.container}>
      <div className="welcome-message" style={styles.text}>
        <Typography color={"secondary"} variant={"h4"}>
          remoteWork(tech) is your favorite resource for all remote based tech
          jobs
        </Typography>
      </div>
    </div>
  );
};

export default WelcomeMessage;
