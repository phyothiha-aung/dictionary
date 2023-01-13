import React, { useState, useEffect } from "react";
import axios from "axios";
import { Switch, Container } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Header from "./components/Header/Header";
import Definition from "./components/Definition/Definition";
import "./Dictionary.css";

const Dictionary = () => {
  const [word, setWord] = useState("");
  const [language, setLanguage] = useState("en");
  const [meanings, setMeanings] = useState([]);
  const [darkMode, setDarkMode] = useState(true);

  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const fetchDictionaryApi = async () => {
    await axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/${language}/${word}`)
      .then((res) => setMeanings(res.data))
      .catch((err) => setMeanings([]));
  };

  const handleWordChange = (value) => {
    setWord(value);
  };

  const handleLanguageChange = (value) => {
    setWord("");
    setLanguage(value);
  };

  useEffect(() => {
    word && fetchDictionaryApi();
  }, [word]);

  return (
    <ThemeProvider theme={darkTheme}>
      <div
        style={{
          height: "100vh",
          backgroundColor: darkMode ? "#282c34" : "#ffff",
          color: darkMode ? "#fff" : "#000",
          transition: "color 0.4s linear, background-color 0.4s linear",
        }}
        className="dictionary"
      >
        <div className="switch">
          <span
            style={{
              color: darkMode ? "#ffff" : "#282c34",
              paddingRight: "5px",
            }}
          >
            {darkMode ? "Light" : "Dark"} Mode
          </span>
          <Switch
            checked={darkMode}
            onChange={() => setDarkMode((prev) => !prev)}
          />
        </div>
        <Container maxWidth="md" className="dictionary-container">
          <Header
            word={word}
            onWordChange={handleWordChange}
            language={language}
            onLanguageChange={handleLanguageChange}
            darkMode={darkMode}
          />
          <Definition
            darkMode={darkMode}
            results={meanings}
            word={word}
            language={language}
          />
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default Dictionary;
