import React from "react";
import { DiscountIndicator } from "../components/DiscountIndicator";
import { AppHeading } from "../components/AppHeading";
import { AppAnswer } from "../components/AppAnswer";
import { AppButton } from "../components/AppButton";

const variantData = [
  { number: 1, text: "Ваш ответ" },
  { number: 2, text: "Ваш ответ" },
  { number: 3, text: "Ваш ответ" },
  { number: 4, text: "Ваш ответ" },
];

export const StepTwo = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="variants-quiz">
          <DiscountIndicator activeUnits={1} />
          <div className="question">
            <AppHeading children={"2. Занимательный вопрос"} level={2} />
            <ul className="variants">
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
