import { ComponentProps } from "react";
import style from "../button/button.module.css";

interface ButtonProps {
  onClick: ComponentProps<"button">["onClick"];
  children: string;
  color?: string;
  iconButton?: boolean;
}

const Button = ({ children, onClick, color, iconButton }: ButtonProps) => {
  return (
    <button
      style={{ backgroundColor: `${color}` }}
      className={
        iconButton ? `${style.iconButton} fontLato` : `${style.button} fontLato`
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export { Button };
