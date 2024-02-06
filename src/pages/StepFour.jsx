import React from "react";
import { DiscountIndicator } from "../components/DiscountIndicator";
import { AppHeading } from "../components/AppHeading";
import { AppAnswer } from "../components/AppAnswer";
import { AppButton } from "../components/AppButton";

const variantData = [
  { number: 1, text: "1" },
  { number: 2, text: "2" },
  { number: 3, text: "3" },
  { number: 4, text: "4" },
  { number: 5, text: "5" },
];

export const StepFour = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <DiscountIndicator activeUnits={3} />
          <div className="question">
            <AppHeading children={"4. Занимательный вопрос"} level={2} />
            <ul className="level-variants">
              {variantData &&
                variantData.map((e) => (
                  <AppAnswer answerNumber={e.number} labelTxt={e.text} />
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
