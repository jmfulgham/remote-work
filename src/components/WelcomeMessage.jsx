import React from "react";
import { Typography, useTheme } from "@mui/material";

const styles = {
  welcomeContainer: {
    width: "80%",
    marginTop: "2rem",
    marginBottom: "2rem",
    alignSelf: "center"
  },
  welcomeText: {
    textAlign: "center",
  },
};

const WelcomeMessage = () => {
  return (
    <div className="welcome-message-container" style={styles.welcomeContainer}>
      <div className="welcome-message" style={styles.welcomeText}>
        <Typography color={"secondary"} variant={"h4"}>
          remoteWork(tech) is your favorite resource for all remote based tech
          jobs
        </Typography>
      </div>
    </div>
  );
};

export default WelcomeMessage;
