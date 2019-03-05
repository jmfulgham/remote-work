import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import MaterialIcon from 'material-icons-react';

const styles = {
    search: {
        padding: '6rem'
    },
    textField: {
        width: '500px'
    },
    iconHover: {
        '&:hover': {
            color: '#000000'
        }
    }
};

export default class Search extends Component {

    render() {
        return (
            <div style={styles.search}>
                <TextField
                    inputProps={{'aria-label': 'Search'}}
                    placeholder="Search"
                    style={styles.textField}/>
                <MaterialIcon icon="search"/>
            </div>
        )
    }
}