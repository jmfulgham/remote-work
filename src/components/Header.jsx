import React from "react";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Typography } from "@mui/material";

const styles = {
  appBar: { marginBottom: "1rem" },
  social: {
    display: "flex",
    marginLeft: "auto",
    alignItems: "center",
  },
  link:{
    color: "#A24FFC",
    textDecoration: "none",
  },
  beta: { color: "#27C4A8" },
  contact: { textDecoration: "none", color: "#27C4A8" }
};
const Header = () => {
  return (
    <div className={"app-bar"} style={styles.appBar}>
      <AppBar elevation={0} color={"primary.main"} position={"static"}>
        <Toolbar>
          <a
            href="/"
            style={styles.link}
          >
            <img srcSet={"../assets/rwt_logo4.png"} alt="remotework(tech)" />
          </a>
          <Typography variant="subtitle1" style={styles.beta}>
            beta
          </Typography>
          <div style={styles.social}>
            <Typography variant="h6">
              <a
                href="mailto:mo@jaimo.net?subject=Hey! I love remoteWork.tech!"
                style={styles.contact}
              >
                Contact
              </a>
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
