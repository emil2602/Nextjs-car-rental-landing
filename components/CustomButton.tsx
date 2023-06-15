"use client";

import Image from "next/image"
import { CustomButtonProps } from "@/types";

const CustomButton = ({ title, containerStyles, btnTtype, handleClick}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnTtype || 'button'}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className="flex-1">
        {title}
      </span>
    </button>
  )
}

export default CustomButton