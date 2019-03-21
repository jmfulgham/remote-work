import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import MaterialIcon from 'material-icons-react';

const styles = {
    search: {
        paddingTop: '6rem'
    },
    textField: {
        width: '500px',
        fontSize: '100px'
    },
    // iconHover: {
    //     '&:hover': {
    //         color: '#000000'
    //     }
    //}
};

export default class Search extends Component {
    constructor(props) {
        super(props);
    }


    handleChange = event => {
           this.props.searchTerm(event.target.value);
    };

    render() {
        return (
            <div style={styles.search}>
                <TextField
                    inputProps={{'aria-label': 'Search'}}
                    placeholder="Search Jobs Here"
                    style={styles.textField}
                    onBlur={this.handleChange}/>
                <MaterialIcon icon="search"/>
            </div>
        )
    }
}