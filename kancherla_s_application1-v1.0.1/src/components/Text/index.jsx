import React from "react";

const sizes = {
  xs: "text-[11px] font-normal",
  lg: "text-sm font-normal",
  s: "text-xs font-normal",
  "2xl": "text-base font-normal",
  "3xl": "text-lg font-normal",
  "4xl": "text-[19px] font-normal",
  xl: "text-[15px] font-medium",
  md: "text-[13px] font-normal",
};

const Text = ({ children, className = "", as, size = "lg", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-black-900 font-ibmplexsans ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
