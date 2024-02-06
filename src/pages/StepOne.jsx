import React from "react";
import { DiscountIndicator } from "../components/DiscountIndicator";
import { AppHeading } from "../components/AppHeading";
import { AppInput } from "../components/AppInput";
import { AppButton } from "../components/AppButton";

export const StepOne = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <DiscountIndicator activeUnits={0} />
          <div className="question">
            <AppHeading children={"1. Занимательный вопрос"} level={2} />
            <AppInput
              errorText={"Введите ответ в правильном формате например"}
              inputPlaceholder={"Ваш ответ"}
              inputType={"text"}
              name={"answer"}
            />
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
