import React, { useState } from "react";

const TextSizeChanger = () => {
  const [fontSize, setFontSize] = useState(16);

  return (
    <div className="App">
      <button onClick={() => setFontSize(fontSize + 2)}>
        + increase fontsize
      </button>
      <button onClick={() => setFontSize(fontSize - 2)}>
        - decrease fontsize
      </button>
      <p
        style={{
          fontSize: `${fontSize}px`
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  );
};

export default TextSizeChanger;
