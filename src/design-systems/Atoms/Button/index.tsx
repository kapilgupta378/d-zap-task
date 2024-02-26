import React from "react";

import Spinner from "../Spinner";

import { ButtonProps } from "./interface";
import { getButtonSize, getSpinnerSize, getSpinnerStokeColor } from "./utils";

const Button: React.FC<ButtonProps> = ({
  type = "button",
  loading = false,
  disabled = false,
  fullWidth = false,
  size = "medium",
  color = "neon",
  className = "",
  children,
  onClick,
  ...rest
}) => {
  const classNames = [
    getButtonSize(size, loading, fullWidth),
    "flex items-center justify-center gap-4",
    "overflow-hidden",
    "border border-lightGray text-base font-Poppins font-semibold text-black rounded-sm hover:border-black focus:outline-none custom-focus",
    fullWidth && "w-full",
    disabled ? "pointer-events-none text-lightGray  " : "cursor-pointer",
    className,
  ].join(" ");

  const spinnerClasses = [
    getSpinnerStokeColor(color),
    getSpinnerSize(size),
  ].join(" ");
  if (loading) disabled = true;

  return (
    <button
      className={`${classNames}`}
      disabled={disabled}
      type={type}
      onClick={onClick}
      {...rest}
    >
      {loading ? (
        <p className="flex items-center text-lightGray">
          Loading...
          <Spinner className={spinnerClasses} />
        </p>
      ) : (
        children
      )}
    </button>
  );
};
export default Button;
