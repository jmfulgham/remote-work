import React, { useState } from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import JobBoard from "./JobBoard.jsx";
import WelcomeMessage from "./WelcomeMessage";


const styles = {
    container: {
        display: "flex", flexDirection: "column", justifyContent: "center",
        margin: "1em",
    }
}
const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchError, setIsSearchError] = useState(false);

  return (
    <div className="parent-container">
      <Header />
        <div className={"child-container"} style={styles.container}>
      <WelcomeMessage />
      <SearchBar
        isSearchError={isSearchError}
        setIsSearchError={setIsSearchError}
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
      />
      <JobBoard setIsSearchError={setIsSearchError} searchTerm={searchTerm} />
        </div>
    </div>
  );
};
export default Home;
