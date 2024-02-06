import React, { useState } from "react";

export const AppInput = ({
  labelText,
  errorText,
  id,
  inputPlaceholder,
  inputType,
  pattern,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
    setError(value === "");
  };

  return (
    <label className={`input-wrapper ${error ? "_error" : ""}`}>
      {labelText}
      <input
        id={id}
        placeholder={inputPlaceholder}
        type={inputType}
        pattern={pattern}
        value={inputValue}
        onChange={handleChange}
        className={error ? "_error" : ""}
      />
      {error && <span id="error-message">{errorText}</span>}
    </label>
  );
};
