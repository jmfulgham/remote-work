import React, {Component} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const styles = {
    container: {
        padding: '3rem 3rem 3rem 3rem'
    },
    header:{
        backgroundColor: '#efcafc'
    }
}

export default class JobBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: [{}]
        }
    }

    render() {
        return (
            <div style={styles.container}>
                <Paper>
                    <Table>
                        <TableHead style={styles.header}>
                            <TableRow>
                                <TableCell>Job Title</TableCell>
                                <TableCell>Source</TableCell>
                                <TableCell>Apply</TableCell>
                                <TableCell>Focus</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow key="1">
                                <TableCell>
                                    Software Engineer
                                </TableCell>
                                <TableCell>LinkedIn</TableCell>
                                <TableCell><a href="/">Apply</a></TableCell>
                                <TableCell>Engineering</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        )
    }
}