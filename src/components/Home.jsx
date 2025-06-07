import React, {useState} from 'react';
import Header from './Header';
import SearchBar from './SearchBar'
import JobBoard from './JobBoard'
import Grid from '@material-ui/core/Grid';
import WelcomeMessage from "./WelcomeMessage";

const styles = {
    parent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flexGrow: '1'
    },
};

const Home =  () =>{
    const [searchTerm, setSearchTerm] = useState("")
    const handleSearch = input => {
        setSearchTerm(input);
    };

    return (
        <div style={styles.parent}>
            <Grid container direction="column"
                  alignItems="center" justify="space-around">
                <Grid item xs={12}>
                    <Header/>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <WelcomeMessage />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <SearchBar searchTerm={handleSearch} />
                </Grid>
                <Grid item xs={10} sm={6}>
                    <JobBoard search={searchTerm} />
                </Grid>
            </Grid>
        </div>
    )
};
export default Home;
