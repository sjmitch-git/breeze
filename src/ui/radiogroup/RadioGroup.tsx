"use client";

import React, { useState, useMemo, useEffect } from "react";

import { twMerge } from "tailwind-merge";

import { Input, Label, Fieldset } from "..";

import { RadioGroupProps } from "./types";

const layouts = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  5: "grid-cols-5",
  6: "grid-cols-6",
};

const RadioGroup = ({
  className = "",
  labelStyles = "",
  legend,
  data,
  name,
  getIcon,
  icons = false,
  onChange,
  hideInput,
  columns = 1,
  size = "md",
  legendAlign = "center",
  legendBold = true,
  hasBorder = false,
  spacing = "4",
  roundedRadio = "full",
  defaultChecked,
}: RadioGroupProps) => {
  const [checked, setChecked] = useState("");

  const layoutStyles = useMemo(() => layouts[columns], [columns]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.value);
    if (onChange && event.type === "change") onChange(event);
  };

  return (
    <Fieldset
      legendText={legend}
      legendSize={size}
      legendAlign={legendAlign}
      isBold={legendBold}
      hasBorder={hasBorder}
    >
      <div
        className={twMerge(
          `radiogroup group grid ${layoutStyles} gap-${spacing} ${icons ? "icons" : ""}`,
          className
        )}
      >
        {data.map((item) => {
          return (
            <Label
              key={item.id}
              label={getIcon ? getIcon(item.id) : item.name}
              layout="row_reverse"
              type="radio"
              className={labelStyles}
              size={size}
            >
              <Input
                name={name}
                type="radio"
                value={item.id}
                onChange={handleChange}
                checked={item.id === checked}
                defaultChecked={item.id === defaultChecked}
                className={`${hideInput ? "opacity-0 w-0 h-0 -ml-1" : ""}`}
                size={size}
                rounded={roundedRadio}
              />
            </Label>
          );
        })}
      </div>
    </Fieldset>
  );
};

export default RadioGroup;
