import { MouseEventHandler } from "react";

export interface customButtonProps {
  title: string;
  btnType?: "button" | "submit";
  styles?: string;
  rightIcon?: string;
  handleClick: MouseEventHandler<HTMLButtonElement>;
  isDisabled?: boolean;
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface CustomFiterProps {
  title: string;
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface CustomSearchProps {
  styles: string;
}
