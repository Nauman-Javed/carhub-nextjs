import { MouseEventHandler } from "react";

export interface customButtonProps {
  title: string;
  styles?: string;
  handleClick: MouseEventHandler<HTMLButtonElement>;
}
