import React from "react";

export const AppButton = ({ type, id, disabled, children }) => {
  return (
    <button type={type} id={id} disabled={disabled}>
      {children}
    </button>
  );
};
