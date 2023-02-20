import React, { useState } from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import "./Button.scss";

interface ButtonProps {
  variant: string;
  text: string;
  icon?: JSX.Element | JSX.Element[];
  type: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ variant, text, type, onClick }) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <button type={type} onClick={onClick} className={"default-btn " + variant}>
      {text}
    </button>
  );
};
export default Button;
