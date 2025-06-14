import React,  {useState} from 'react';
import {TextField} from '@mui/material';

const styles = {
    parent: {
        display: 'flex',
    },
    search: {
        padding: '2rem'
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

const SearchBar = ()=>{
    const [searchTerm, setSearchTerm] = useState("")
   const handleChange = event => {
        let input = event.target.value.toString();
        let validatedInput = input.replace(/[^A-Za-z0-9+#\s]/gi, '');
        setSearchTerm(validatedInput);
    };

        return (
            <div style={styles.parent}>
                <div style={styles.search}>
                    <TextField
                        value={searchTerm}
                            style={{
                                fontSize: '2.25rem',
                                lineHeight: 'normal'
                            }}

                        className="search"
                        label="Search"
                        aria-describedby="search-for-jobs"
                        helperText="Search for jobs here! Use keywords such as 'engineer' or 'security'."
                        onChange={handleChange}>
                    </TextField>
                </div>
            </div>
        )
}

export default SearchBar
