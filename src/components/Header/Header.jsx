import React from "react";
import { TextField, MenuItem } from "@mui/material";

import "./Header.css";
import Languages from "../../data/Languages";

const Header = ({
  word,
  language,
  darkMode,
  onWordChange,
  onLanguageChange,
}) => {
  return (
    <div className="header">
      <h1 className="title" style={{ color: darkMode ? "#ffff" : "#282c34" }}>
        {word ? word : "Dictionary"}
      </h1>
      <div className="input-container">
        <TextField
          className="text-field"
          label="Search a word..."
          variant="standard"
          value={word}
          onChange={(e) => onWordChange(e.target.value)}
        />
        <TextField
          className="text-field"
          id="standard-select-currency"
          select
          label="Language"
          variant="standard"
          value={language}
          onChange={(e) => onLanguageChange(e.target.value)}
        >
          {Languages.map((language) => (
            <MenuItem key={language.value} value={language.value}>
              {language.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </div>
  );
};

export default Header;
