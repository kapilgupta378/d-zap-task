import React from "react";

import Typography from "../Typography";

import { getPlaceholderStyles } from "./utils";
import { InputProps } from "./interface";

const Input: React.FC<InputProps> = ({
  className,
  onChange,
  label,
  type,
  value,
  placeholder,
  variant = "primary",
  name,
  error,
}) => {
  const typographyClass = [
    `text-left font-Poppins text-md smd:text-base font-semibold leading-[145%] text-black pb-[6px] smd:pb-2`,
  ].join(" ");

  const inputClassNames = [
    "w-full border-none bg-transparent  font-Poppins text-h3  text-white font-medium text-black outline-none placeholder:font-h3 placeholder:leading-[145%] placeholder:text-lightGray",
    getPlaceholderStyles(variant),
  ].join(" ");

  return (
    <div className={`w-full ${className}`}>
      {label && <Typography className={typographyClass}>{label}</Typography>}
      <div className="custom-focus border-lightGray w-full rounded-sm   p-0 focus-within:border-black hover:border-black focus:outline-none">
        <div className={`relative w-full cursor-pointer rounded-sm `}>
          <input
            name={name}
            className={inputClassNames}
            placeholder={placeholder}
            type={type}
            value={value}
            onChange={onChange}
          />
        </div>
      </div>
      <p className="text-error-800">{error}</p>
    </div>
  );
};

export default Input;
