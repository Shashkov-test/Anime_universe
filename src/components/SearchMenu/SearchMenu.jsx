import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import { createFilterOptions } from "@mui/material/Autocomplete";

import "./SearchMenu.scss";

const SearchMenu = ({ titleList, setSelectedAnime }) => {
  const handleInputChange = (event, value) => {
    const selectedTitles = titleList.filter((item) =>
      value.some((selectedValue) => item.title.includes(selectedValue))
    );

    setSelectedAnime(selectedTitles);
  };

  const filterOptions = createFilterOptions({
    matchFrom: "start",
  });

  const styles = {
    background: "#282c39",
  };

  return (
    <div className="searchMenu">
      <Autocomplete
        multiple
        limitTags={1}
        className="searchMenu__filters"
        id="search"
        options={titleList?.map((item) => item?.title) || []}
        onChange={(event, value) => handleInputChange(event, value)}
        sx={{ width: "350px" }}
        componentsProps={{
          paper: {
            sx: {
              background: "#2f3444",
              color: "rgba(255, 255, 255, 0.7)",
            },
          },
        }}
        renderInput={(params) => <TextField {...params} label="Choose" />}
        filterOptions={filterOptions}
        size="medium"
        style={styles}
      />

      <p>WATCH INFO ABOUT ANY SHOW ONLINE FOR FREE</p>
    </div>
  );
};

export default SearchMenu;
