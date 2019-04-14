import React, {Component} from 'react';
import ReactQuill from 'react-quill';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import OutlinedInput from '@material-ui/core/OutlinedInput';
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
    },

    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
        // padding: theme.spacing.unit * 1
    },
});

const container = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignContent: 'space-around'
};

class JobTextEditor extends Component{

    constructor(props) {
        super(props);
        this.state = { text: '' }; // You can also pass a Quill Delta here

    }

    // handleChange = (value) => {
    //     this.setState({ text: value })
    // };

    handleChange = event => {
        this.setState({ ...this.state, [event.target.name]: event.target.value });
    };

    render() {
        const { classes } = this.props;
        return (
            <div classname="job-listing-parent" style={container}>
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
                    <FormControl className={classes.container}>
                        <InputLabel htmlFor="age-simple">Category</InputLabel>
                        <Select
                            value={this.state.age}
                            onChange={this.handleChange}
                            inputProps={{
                                name: 'category',
                            }}
                            input={
                                <OutlinedInput
                                    margin={"dense"}/>}
                            className={classes.selectEmpty}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value="Software Engineer/Web Development">Software Engineer/Web Development</MenuItem>
                            <MenuItem value="Mobile Development">Mobile Development</MenuItem>
                            <MenuItem value="IT Support Services">IT Support Services</MenuItem>
                            <MenuItem value={"Information Security"}>Information Security</MenuItem>
                            <MenuItem value="Network Engineering">Network Engineering</MenuItem>
                            <MenuItem value={"Systems Administration"}>Systems Administration</MenuItem>
                            <MenuItem value={"Data Science"}>Data Science</MenuItem>
                            <MenuItem value={"Database Administration"}>Database Administration</MenuItem>
                            <MenuItem value={"Artificial Intelligence"}>Artificial Intelligence</MenuItem>
                            <MenuItem value={"Machine Learning"}>Machine Learning</MenuItem>
                        </Select>

                    </FormControl>
                </section>
                <section className={"text-input"} style={{marginTop: '1rem'}}>
            <ReactQuill value={this.state.text}
                        onChange={this.handleChange} />
                </section>
            </div>
        )
    }
}

export default withStyles(styles)(JobTextEditor)