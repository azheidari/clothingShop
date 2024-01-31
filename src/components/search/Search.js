import React, { useState } from "react";

function Search({ searchItems }) {
  const [value, setValue] = useState("");

  let inputHandler = (e) => {
    var lowerCase = e.target.value;
    setValue(lowerCase);
  };

  const onsubmit = (e) => {
    e.preventDefault();
    searchItems(value);
  };

  return (
    <div style={{ display: "flex" }}>
      <form onSubmit={onsubmit}>
        <input
          style={{
            width: "25rem",
            height: "35px",
            borderRadius: "5px",
            padding: "5px",
            margin: "10px",
          }}
          type="text"
          placeholder="search..."
          value={value}
          onChange={inputHandler}
        />
      </form>
    </div>
  );
}

export default Search;
