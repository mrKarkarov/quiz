import React from "react";

export const AppHeading = ({ level, children }) => {
  const HeadingTag = `h${level}`;

  return <HeadingTag>{children}</HeadingTag>;
};
