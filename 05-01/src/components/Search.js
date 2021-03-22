import React, { useState } from "react";

export default function Search({getQuery}) {
  const [text, setText] = useState("");

  const onChange = (inputText) => {
    setText(inputText);
    if (inputText === '') {
        getQuery(text);
    }
  };

  const onClick = () => {
      getQuery(text);
  }

  return (
    <div className="my-5">
      <div className="input-group d-flex justify-content-center">
        <div className="form-outline w-75">
          <input
            id="search-input"
            type="search"
            className="form-control"
            placeholder="Find your favorite beer!"
            value={text}
            onChange={(e) => onChange(e.target.value)}
          />
        </div>
        <button id="search-button" type="button" className="btn btn-primary" onClick={() => onClick()}>
          <i className="fas fa-search"></i>
        </button>
      </div>
    </div>
  );
}
