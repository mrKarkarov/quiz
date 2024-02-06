import React from "react";
import { AppHeading } from "../components/AppHeading";
import { AppButton } from "../components/AppButton";

export const Thanks = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="thanks">
          <img src="./img/bell.png" alt="bell" />
          <AppHeading children={"Спасибо за прохождение опроса!"} level={1} />
          <p>Получи свою скидку по ссылке ниже или другое блаблабла</p>
          <AppButton
            children={"Получить ссылку"}
            id={"get-link"}
            type={"button"}
          />
        </div>
      </div>
    </div>
  );
};
