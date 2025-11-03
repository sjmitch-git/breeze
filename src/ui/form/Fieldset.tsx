import React from "react";

import { twMerge } from "tailwind-merge";

import { FieldsetProps } from "./types";
import Legend from "./Legend";

const Fieldset = ({
  legendText,
  disabled,
  legendAlign,
  legendSize,
  hasBorder = false,
  isBold = false,
  children,
  spacing = "4",
  className = "",
}: FieldsetProps) => {
  return (
    <fieldset
      disabled={disabled}
      className={twMerge(
        `fieldset group border-neutral-400 dark:border-neutral flex flex-col gap-${spacing} ${
          hasBorder ? "border p-4" : "border-0"
        }`,
        className
      )}
    >
      {legendText && (
        <Legend text={legendText} align={legendAlign} legendSize={legendSize} isBold={isBold} />
      )}
      {children}
    </fieldset>
  );
};

export default Fieldset;
