import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MaterialIcon from 'material-icons-react';

require("typeface-quicksand");

const styles = {
    social: {
        display: 'flex',
        marginLeft: "auto"
    }
};


export default class Header extends Component {
    render() {
        return (<div>
                    <AppBar elevation="1">
                        <Toolbar>
                            <Typography variant="title" color="secondary">remote-work</Typography>
                            <div style={styles.social}><MaterialIcon icon="email"/></div>
                        </Toolbar>
                    </AppBar>
            </div>
        )
    }
}