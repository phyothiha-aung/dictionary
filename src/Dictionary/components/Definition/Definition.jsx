import React from "react";

import "./Definition.css";

const Definition = ({ darkMode }) => {
  return (
    <div
      className="definition"
      style={{
        border: `5px solid ${darkMode ? "rgb(170, 170, 170)" : "#282c34"}`,
      }}
    >
      Definition
    </div>
  );
};

export default Definition;
