import React from "react";
import { DiscountIndicator } from "../components/DiscountIndicator";
import { AppHeading } from "../components/AppHeading";
import { AppImgAnswer } from "../components/AppImgAnswer";
import { AppButton } from "../components/AppButton";

const imgAnswerData = [
  { number: 1, txt: "laugh", source: "./img/laugh.png" },
  { number: 2, txt: "hearts", source: "./img/hearts.png" },
  { number: 3, txt: "smirk", source: "./img/smirk.png" },
  { number: 4, txt: "fright", source: "./img/fright.png" },
];

export const StepThree = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <DiscountIndicator activeUnits={2} />
          <div className="question">
            <AppHeading children={"3. Занимательный вопрос"} level={2} />
            <ul className="emoji-variants">
              {imgAnswerData &&
                imgAnswerData.map((e) => (
                  <AppImgAnswer
                    altTxt={e.txt}
                    answerNumber={e.number}
                    answerImg={e.source}
                  />
                ))}
            </ul>
            <AppButton
              children={"Далее"}
              disabled
              id={"nex-btn"}
              type={"button"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
