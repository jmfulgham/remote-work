import React, { useState } from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import JobBoard from "./JobBoard.jsx";
import WelcomeMessage from "./WelcomeMessage";

const styles = {
  parent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchError, setIsSearchError] = useState(false);

  return (
    <div style={styles.parent}>
      <Header />
      <WelcomeMessage />
      <SearchBar
        isSearchError={isSearchError}
        setIsSearchError={setIsSearchError}
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
      />
      <JobBoard setIsSearchError={setIsSearchError} searchTerm={searchTerm} />
    </div>
  );
};
export default Home;
