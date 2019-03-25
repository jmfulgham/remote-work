import React, {Component} from 'react';
import IconButton from '@material-ui/core/IconButton';
import Search from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';

const styles = {
    parent: {
        display: 'flex',
    },
    search: {
        paddingBottom: '2rem'
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
                            style: {
                                fontSize: '2.25rem',
                                lineHeight: 'normal'
                            }
                        }}
                        className="search"
                        label="Search"
                        aria-describedby="search-for-jobs"
                        helperText="Search by job title here"
                        onChange={this.handleChange}>

                    </TextField>

                </div>
            </div>
        )
    }
}