import React from "react";
import Image from "next/image";
import { customButtonProps } from "@/types";

export const CustomButton = ({
  title,
  btnType,
  styles,
  handleClick,
  rightIcon,
}: customButtonProps) => {
  return (
    <button
      disabled={false}
      type={"button" || btnType}
      className={`custom-btn ${styles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="rightIcon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};
