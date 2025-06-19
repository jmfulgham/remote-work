import React from "react";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Typography } from "@mui/material";

const styles = {
  social: {
    display: "flex",
    marginLeft: "auto",
    alignItems: "center",
  },
};
const Header = () => {
  return (
    <div className={"app-bar"} style={{ marginBottom: "1rem" }}>
      <AppBar elevation={0} color={"primary.main"} position={"fixed"}>
        <Toolbar>
          <a
            href="/public"
            style={{
              color: "#A24FFC",
              textDecoration: "none",
            }}
          >
            <img srcSet={"../assets/rwt_logo4.png"} alt="remotework(tech)" />
          </a>
          <Typography variant="subtitle1" style={{ color: "#27C4A8" }}>
            beta
          </Typography>
          <div style={styles.social}>
            <Typography variant="h6">
              <a
                href="mailto:mo@jaimo.net?subject=Hey! I love remoteWork.tech!"
                style={{ textDecoration: "none", color: "#27C4A8" }}
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
