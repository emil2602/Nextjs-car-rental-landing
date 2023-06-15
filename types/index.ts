import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  btnTtype?: 'button' | 'submit';
  handleClick?: MouseEventHandler<HTMLButtonElement>
}