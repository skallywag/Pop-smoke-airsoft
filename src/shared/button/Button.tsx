import React from "react";
import "./Button.scss";

interface ButtonProps {
  variant: string;
  text: string;
  onClick: () => void;
  type: "button" | "submit" | "reset" | undefined;
}

const Button: React.FC<ButtonProps> = ({ variant, text, onClick, type }) => {
  return (
    <button type={type} onClick={onClick} className={"default-btn " + variant}>
      {text}
    </button>
  );
};
export default Button;
