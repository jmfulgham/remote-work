import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MaterialIcon from 'material-icons-react';

require("typeface-quicksand");

const styles = {
    social: {
        display: 'flex',
        marginLeft: "auto",
        alignItems: 'center'
    }
};

export default class Header extends Component {
    render() {
        return (<div className={"app-bar"}>
                    <AppBar elevation={1} >
                        <Toolbar>
                            <Typography variant="display1" color="secondary"><NavLink
                                to="/"
                                activeStyle={{
                                    color: "#A24FFC",
                                    textDecoration: 'none'
                                }}
                            >
                                remotework(tech)
                            </NavLink></Typography>
                            <Typography variant="subtitle1" style={{color:"#27C4A8"}}>beta</Typography>
                            <div style={styles.social}>
                                <a href="mailto:mo@jaimo.net?subject=Hey! I love remoteWork.tech!"><MaterialIcon icon="email" color='#27C4A8' aria-label="Email"/></a>
                            </div>
                            <NavLink to="/post-job">Post a Job!</NavLink>
                        </Toolbar>
                    </AppBar>
            </div>
        )
    }
}