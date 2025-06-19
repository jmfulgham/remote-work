import React from "react";
import { TextField } from "@mui/material";

const styles = {
  parentSearchContainer: {
    margin: "auto",
  },
  textField: {
    fontSize: "2.25rem",
    lineHeight: "normal",
    width: "100%",
  },
  iconHover: {
    "&:hover": {
      color: "#000000",
    },
  },
};

const SearchBar = ({ searchTerm, setSearchTerm, isSearchError }) => {
  const handleSearch = () => {
    const input = searchTerm.toString();
    const validatedInput = input.replace(/[^a-zA-Z0-9\s]/g, "");
    setSearchTerm(validatedInput.trim());
  };

  return (
    <div style={styles.parentSearchContainer} className={"search-parent-container"}>
        <TextField
          error={isSearchError}
          value={handleSearch(searchTerm)}
          style={styles.textField}
          label="Search"
          aria-describedby="search-for-jobs"
          helperText={
            isSearchError
              ? "No matches found, please try again"
              : "Search for jobs here! Use keywords such as 'engineer' or 'security'"
          }
          onChange={(e) => setSearchTerm(e.target.value)}
        ></TextField>
    </div>
  );
};

export default SearchBar;
