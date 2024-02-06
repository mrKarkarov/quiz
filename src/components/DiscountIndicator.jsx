import React from "react";

export const DiscountIndicator = ({ activeUnits }) => {
  const renderUnits = () => {
    const units = [];
    for (let i = 1; i <= 4; i++) {
      const isActive = activeUnits >= i;
      units.push(
        <div
          key={`unit-${i}`}
          className={`indicator__unit indicator__unit-${i} ${
            isActive ? "_active" : ""
          }`}
        ></div>
      );
    }
    return units;
  };

  return (
    <div className="indicator">
      <div className="indicator__text">
        <span className="indicator__description">
          Скидка за прохождение опроса:
        </span>
        <span className="indicator__value">15%</span>
      </div>
      <div className="indicator__progressbar">{renderUnits()}</div>
    </div>
  );
};
