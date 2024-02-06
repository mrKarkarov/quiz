import React from "react";

export const AppAnswer = ({ answerNumber, labelTxt }) => {
  const answer = `variant-${answerNumber}`;

  return (
    <li className="variant-wrapper">
      <input required type="radio" name="variant" id={answer} />
      <label htmlFor={answer}>{labelTxt}</label>
    </li>
  );
};
