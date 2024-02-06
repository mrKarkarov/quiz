import React from "react";

export const AppImgAnswer = ({ answerNumber, answerImg, altTxt }) => {
  const answer = `variant-${answerNumber}`;

  return (
    <li className="variant-wrapper">
      <input required type="radio" name="variant" id={answer} />
      <label htmlFor={answer}>
        <img src={answerImg} alt={altTxt} />
        <p>Ваш ответ {answerNumber}</p>
      </label>
    </li>
  );
};
