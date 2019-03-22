import React, {Component} from 'react';
import IconButton from '@material-ui/core/IconButton';
import Search from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';

const styles = {
    parent: {
        display: 'flex',
    },
    search: {
        paddingTop: '6rem'
    },
    textField: {
        maxWidth: '30rem',
        textAlign: 'center'
    },
    iconHover: {
        '&:hover': {
            color: '#000000'
        }
    }
};

export default class SearchBar extends Component {


    handleChange = event => {
        let input = event.target.value.toString();
        let validatedInput = input.replace(/[^\w\s]/gi, '');
        this.props.searchTerm(validatedInput);
    };


    render() {
        return (
            <div style={styles.parent}>
                <div style={styles.search}>
                    <TextField
                        inputProps={{'aria-label': 'SearchBar', style: {fontSize: '5.25rem', lineHeight: 'normal'}}}
                        className="search" placeholder="Search"
                        onBlur={this.handleChange}>
                        <IconButton color="secondary" disableRipple={true}>
                            <Search/>
                        </IconButton>
                    </TextField>
                </div>
            </div>
        )
    }
}