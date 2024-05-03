import React from "react";
import PropTypes from "prop-types";

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
  const buttonClasses = [
    "btn", // Bootstrap button class
    `btn-${size}`, // Bootstrap button size class
    `btn-${variant}-${color}`, // Bootstrap button variant and color class
    shape === "round" ? "rounded-pill" : "", // Bootstrap rounded shape class if specified
    className, // Custom classes provided by the user
  ].filter((cls) => cls.trim() !== "").join(" ");

  return (
    <button className={buttonClasses} {...restProps}>
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
  size: PropTypes.oneOf(["sm", "lg", "xl"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"]),
};

export { Button };
