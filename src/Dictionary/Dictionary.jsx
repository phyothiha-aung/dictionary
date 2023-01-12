import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "@mui/material/Container";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Header from "./components/Header/Header";
import Definition from "./components/Definition/Definition";

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
    const res = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/${language}/${word}`
    );

    setMeanings(res.data);
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
        }}
        className="dictionary"
      >
        <Container maxWidth="md" className="dictionary-container">
          <Header
            word={word}
            onWordChange={handleWordChange}
            language={language}
            onLanguageChange={handleLanguageChange}
            darkMode={darkMode}
          />
          <Definition darkMode={darkMode} />
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default Dictionary;
