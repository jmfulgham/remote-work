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
                        InputProps={{
                            endAdornment: <IconButton color="secondary" disableRipple={true}>
                                <Search/>
                            </IconButton>,
                            'aria-label': 'SearchBar',
                            style: {
                                fontSize: '2.25rem',
                                lineHeight: 'normal'
                            }
                        }}
                        className="search" placeholder="Search"
                        onChange={this.handleChange}>

                    </TextField>

                </div>
            </div>
        )
    }
}