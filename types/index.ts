import { MouseEventHandler } from "react";

export interface customButtonProps {
  title: string;
  btnType?: "button" | "submit";
  styles?: string;
  handleClick: MouseEventHandler<HTMLButtonElement>;
}
