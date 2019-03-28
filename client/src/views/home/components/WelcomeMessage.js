import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        height: '15rem',
        margin: '3rem 0.75rem 0 0.75rem'

    },
    text: {
        alignSelf: 'flex-end',
        textAlign: 'center',
    }
};

export default class WelcomeMessage extends Component {
    render() {
        return (
            <div className="welcome-message-container" style={styles.container}>
                <div className="welcome-message" style={styles.text}>
                    <Typography
                        color={"secondary"}
                        paragraph={true}
                        variant={"h4"}>
                        remoteWork(tech) is your favorite resource for all remote based tech
                        jobs
                    </Typography>
                </div>

            </div>
        );
    }
}