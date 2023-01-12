import React from "react";

import "./Definition.css";

const Definition = ({ darkMode, word }) => {
  return (
    <div
      className="definition"
      style={{
        color: darkMode ? "#ffff" : "#282c34",
        border: `5px solid ${darkMode ? "rgb(170, 170, 170)" : "#282c34"}`,
      }}
    >
      {!word ? <span>Type a word to see the meaning...</span> : <></>}
    </div>
  );
};

export default Definition;
