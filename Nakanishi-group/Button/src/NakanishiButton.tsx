import React from "react";

type ButtonType = "submit" | "reset" | "button";

export const NakanishiButton = ({ type }: { type: ButtonType }) => {
  return (
    <div>
      <button type={type}>This is Nakanishi-Button</button>
    </div>
  );
};
