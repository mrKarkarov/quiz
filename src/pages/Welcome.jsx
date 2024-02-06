import React from "react";
import { AppHeading } from "../components/AppHeading";
import { AppInput } from "../components/AppInput";
import { AppButton } from "../components/AppButton";

export const Welcome = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <AppHeading
            children={"Добро пожаловать в квиз от лучшего учебного центра"}
            level={1}
          />
          <form className="welcome__form">
            <AppInput
              errorText={"Введите имя в правильном формате например"}
              id={"username"}
              inputPlaceholder={"Ваш ответ"}
              inputType={"text"}
              labelText={"Ваше имя"}
            />
            <AppInput
              errorText={"Введите номер в правильном формате"}
              id={"phone"}
              inputPlaceholder={"+998 9- --- -- --"}
              inputType={"tel"}
              labelText={"Ваш номер"}
              pattern={"^(?:+998)?(?:d{2})?(?:d{7})$"}
            />
            <AppButton
              children={"Далее"}
              disabled
              id={"nex-btn"}
              type={"submit"}
            />
          </form>
        </div>
      </div>
    </div>
  );
};
