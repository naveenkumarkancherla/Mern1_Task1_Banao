import React from "react";

const sizes = {
  xl: "text-4xl font-bold md:text-[34px] sm:text-[32px]",
  s: "text-lg font-semibold",
  md: "text-[22px] font-semibold",
  xs: "text-[13px] font-semibold",
  lg: "text-2xl font-bold md:text-[22px]",
};

const Heading = ({ children, className = "", size = "s", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-black-900 font-ibmplexsans ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
