"use client";

import React from "react";
import { twMerge } from "tailwind-merge";

import { AccordionItemProps } from "../types";

import { AccordionHead, AccordionSection } from "../atoms";

const themeClasses = "border-slate-300 dark:border-slate-500";

const backgrounds = {
  responsive: "bg-light text-dark dark:bg-dark dark:text-light",
  transparent: "bg-transparent text-inherit",
};

const AccordionItem = ({
  layoutClasses,
  id,
  title,
  icon = "symbol",
  iconPosition = "right",
  iconColor,
  layout = "default",
  background = "responsive",
  open,
  setOpen,
  className = "",
  children,
}: AccordionItemProps) => {
  return (
    <div
      className={twMerge(
        `accordion-item border-slate-300 dark:border-slate-500 ${layoutClasses} ${backgrounds[background]}`,
        className
      )}
      key={id}
    >
      <AccordionHead
        id={id}
        title={title}
        icon={icon}
        iconPosition={iconPosition}
        iconColor={iconColor}
        layout={layout}
        open={open}
        setopen={setOpen}
      />
      <AccordionSection>{children}</AccordionSection>
    </div>
  );
};

export default AccordionItem;
