import { CustomSearchProps } from "@/types";
import Image from "next/image";
import React from "react";

export const CustomSearchButton = ({ styles }: CustomSearchProps) => {
  return (
    <button type="submit" className={`ml-3 z-10 ${styles}`}>
      <Image
        src="/magnifying-glass.svg"
        alt="magnifying glass"
        width={40}
        height={40}
        className="object-contain"
      />
    </button>
  );
};
