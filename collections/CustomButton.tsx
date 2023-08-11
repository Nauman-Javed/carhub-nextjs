import React from "react";
import Image from "next/image";
import { customButtonProps } from "@/types";

export const CustomButton = ({
  title,
  btnType,
  styles,
  handleClick,
}: customButtonProps) => {
  return (
    <button
      disabled={false}
      type={"button" || btnType}
      className={`custom-btn ${styles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};
