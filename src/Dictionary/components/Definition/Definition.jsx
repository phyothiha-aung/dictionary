import React from "react";

import "./Definition.css";

const Definition = ({ darkMode, word, results, language }) => {
  console.log(results);
  return (
    <div
      className="definitions-container"
      style={{
        color: darkMode ? "#ffff" : "#282c34",
        border: `5px solid ${darkMode ? "rgb(170, 170, 170)" : "#282c34"}`,
      }}
    >
      {results[0] && word && language === "en" && (
        <div>
          <audio
            src={results[0]?.phonetics[0]?.audio}
            controls
            style={{
              display: "flex",
              width: "100%",
              backgroundColor: "#fff",
              borderRadius: "20px",
            }}
          >
            Your browser does not support audio.
          </audio>
        </div>
      )}
      {!word ? (
        <span>Type in serach box to see the meaning...</span>
      ) : (
        results.map((result) =>
          result.meanings.map((meaning) =>
            meaning.definitions.map((def, index) => (
              <div
                className="definition"
                key={index}
                style={{
                  backgroundColor: darkMode ? "#eaeaea" : "#0d1117",
                  color: !darkMode ? "#eaeaea" : "#0d1117",
                }}
              >
                <div>
                  <b>{def.definition}</b>{" "}
                  <i>
                    {meaning.partOfSpeech + " "}
                    {result.phonetics[0] && result.phonetics[0].text}
                  </i>
                </div>
                {(def.example || def.synonyms.length > 0) && (
                  <hr
                    style={{
                      backgroundColor: darkMode ? "#eaeaea" : "#0d1117",
                      width: "100%",
                    }}
                  />
                )}
                {def.example && (
                  <p>
                    <b>Example : </b>
                    {def.example}
                  </p>
                )}

                {def.synonyms.length > 0 && (
                  <p>
                    <b>Synonyms : </b>
                    {def.synonyms.join("/")}
                  </p>
                )}
              </div>
            ))
          )
        )
      )}
    </div>
  );
};

export default Definition;
