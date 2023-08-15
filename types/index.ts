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
  selected: string;
  setSelected: (manufacturer: string) => void;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
  setFilter: (setFilter?: string | number) => void;
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

export interface FilterProps {
  manufacturer?: string;
  year?: number;
  model?: string;
  limit?: number;
  fuel?: string;
}

export interface HomeProps {
  searchParams: FilterProps;
}

export interface SearchBarProps {
  setManufacturer?: (manufacturer: string) => void;
  setModel?: (setModel: string) => void;
}
