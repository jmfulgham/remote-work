import React, {Component} from 'react';
import ReactQuill from 'react-quill';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';

require('react-quill/dist/quill.snow.css');

const styles = theme => ({
    cssLabel: {
        '&$cssFocused': {
            color: '#27C4A8',
        },
    },
    cssFocused: {
        '&$cssFocused': {
            color: '#A24FFC',
        },
    },
    cssUnderline: {
        '&:after': {
            borderBottomColor: '#A24FFC',
        },
    },
    cssOutlinedInput: {
        '&$cssFocused $notchedOutline': {
            borderColor: '#27C4A8',
        },

    },
    container: {
        width: '100%'
    }
});


class JobTextEditor extends Component{

    constructor(props) {
        super(props);
        this.state = { text: '' }; // You can also pass a Quill Delta here

    }

    handleChange = (value) => {
        this.setState({ text: value })
    };

    render() {
        const { classes } = this.props;
        return (
            <div classname="job-listing-parent">
                <section>
                    <FormControl className={classes.container}>
                    <TextField
                        id="outlined-search"
                        label="Job Title"
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            classes: {
                                root: classes.cssLabel,
                                focused: classes.cssFocused,
                            },
                        }}
                        InputProps={{
                            classes: {
                                root: classes.cssOutlinedInput,
                                focused: classes.cssFocused,
                                notchedOutline: classes.notchedOutline,
                            },
                        }}
                    />
                        <TextField
                            id="outlined-search"
                            label="Company"
                            margin="normal"
                            variant="outlined"
                            InputLabelProps={{
                                classes: {
                                    root: classes.cssLabel,
                                    focused: classes.cssFocused,
                                },
                            }}
                            InputProps={{
                                classes: {
                                    root: classes.cssOutlinedInput,
                                    focused: classes.cssFocused,
                                    notchedOutline: classes.notchedOutline,
                                },
                            }}
                        />
                    </FormControl>
                </section>
            <ReactQuill value={this.state.text}
                        onChange={this.handleChange} />
            </div>
        )
    }

}

export default withStyles(styles)(JobTextEditor)