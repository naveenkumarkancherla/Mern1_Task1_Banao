import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded",
};
const variants = {
  fill: {
    black_900: "bg-black-900 text-white-A700",
    white_A700: "bg-white-A700 text-deep_orange-A200",
    gray_400_01: "bg-gray-400_01",
    blue_A700: "bg-blue-A700 text-white-A700",
    blue_gray_50: "bg-blue_gray-50 text-black-900",
    blue_gray_50_01: "bg-blue_gray-50_01",
  },
};
const sizes = {
  sm: "h-[28px] px-1",
  xl: "h-[40px] px-[35px] text-sm",
  lg: "h-[36px] px-[11px] text-[15px]",
  xs: "h-[24px] px-3 text-xs",
  md: "h-[36px] px-[9px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "xs",
  color = "white_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["sm", "xl", "lg", "xs", "md"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["black_900", "white_A700", "gray_400_01", "blue_A700", "blue_gray_50", "blue_gray_50_01"]),
};

export { Button };
