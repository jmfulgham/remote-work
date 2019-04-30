import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const logo = require("../../../assets/rwt_logo4.png");
require("typeface-quicksand");

const styles = {

    social: {
        display: 'flex',
        marginLeft: "auto",
        alignItems: 'center',

    }
};

export default class Header extends Component {
    render() {
        return (<div className={"app-bar"} style={{marginBottom: '1rem'}}>
                <AppBar elevation={0} color={"#EBEBEB"}>
                    <Toolbar>
                        <NavLink
                            to="/"
                            activeStyle={{
                                color: "#A24FFC",
                                textDecoration: 'none'
                            }}>
                            <img src={logo} alt="remotework(tech)"/>
                        </NavLink>
                        <Typography variant="subtitle1" style={{color: "#27C4A8"}}>beta</Typography>
                        <div style={styles.social}>
                            <Typography variant="h6">
                                <a href="mailto:mo@jaimo.net?subject=Hey! I love remoteWork.tech!"
                                   style={{textDecoration: 'none', color: "#27C4A8"}}>
                                    Contact
                                </a>
                            </Typography>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}