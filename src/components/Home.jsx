import React, {useState} from 'react';
import Header from './Header';
import SearchBar from './SearchBar'
import JobBoard from './JobBoard.jsx'
import WelcomeMessage from "./WelcomeMessage";

const styles = {
    parent: {
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center',
    },
};

const Home =  () =>{
    const [searchTerm, setSearchTerm] = useState("")
    const handleSearch = input => {
        setSearchTerm(input);
    };

    return (
        <div style={styles.parent}>
                    <Header/>
                    <WelcomeMessage />
                    <SearchBar searchTerm={handleSearch} />
                    <JobBoard search={searchTerm} />
        </div>
    )
};
export default Home;
