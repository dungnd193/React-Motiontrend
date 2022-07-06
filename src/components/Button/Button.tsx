import React, { ReactNode } from "react";

export interface IButtonProps {
  content: string;
  icon?: ReactNode;
  className?: string;
}

const Button = ({ content, icon, className }: IButtonProps) => {
  return (
    <button
      className={`py-2 px-4 md:px-11 text-xs md:text-sm text-white bg-secondary border border-black transition duration-150 ease-linear hover:bg-white hover:text-secondary flex gap-x-1 items-center justify-center ${
        className ? className : ""
      }`}
    >
      {icon ? <div className="flex-none">{icon}</div> : <></>}
      {content}
    </button>
  );
};

export default Button;
