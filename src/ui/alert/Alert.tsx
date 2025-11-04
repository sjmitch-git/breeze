import React, { useMemo } from "react";

import { twMerge } from "tailwind-merge";

import { AlertProps } from "./types";

import { CloseButton, Heading, Badge } from "..";

const defaultStyles = "border-s-8 bg-slate-100 text-dark dark:bg-slate-800 dark:text-light";
const outlineStyles =
  "border-0 outline outline-2 md:outline-4 bg-slate-100 text-dark dark:bg-slate-800 dark:text-light";
const solidStyles = `solid border-none`;

const statuses = {
  info: "border-info outline-info",
  success: "border-success outline-success",
  warning: "border-warning outline-warning",
  error: "border-error outline-error",
  dark: "border-slate-600 outline-slate-600",
  light: "border-white outline-white",
};

const solidStatuses = {
  info: "bg-info-light text-dark",
  success: "bg-success-light text-dark",
  warning: "bg-warning-light text-dark",
  error: "bg-error-light text-dark",
  dark: "bg-slate-700 text-light",
  light: "bg-slate-50 text-dark",
};

const layouts = {
  default: defaultStyles,
  outline: outlineStyles,
  solid: solidStyles,
};

const roundeds = {
  none: "rounded-0",
  md: "rounded",
  lg: "rounded-lg",
};

const Alert = ({
  className = "",
  style,
  status = "info",
  layout = "default",
  title,
  message,
  dismissable = false,
  onClick,
  badge,
  badgeBackground = "dark",
  badgeColor = "light",
  rounded = "none",
}: AlertProps) => {
  const layoutClasses = useMemo(() => layouts[layout], [layout]);
  const roundedClasses = useMemo(() => roundeds[rounded], [rounded]);
  const statusClasses = useMemo(
    () => (layout === "solid" ? `${solidStatuses[status]}` : `${statuses[status]}`),
    [layout, status]
  );

  return (
    <blockquote
      className={twMerge(
        `alert group relative px-2 md:px-3 lg:px-4 py-1 ${statusClasses} ${layoutClasses} ${roundedClasses}`,
        className
      )}
      style={style}
      data-testid="alert"
      role="alert"
    >
      {title && (
        <Heading level={5} className={`mt-2 mb-0 uppercase font-bold opacity-85 relative`}>
          {badge && (
            <Badge
              badgeBackground={badgeBackground}
              badgeColor={badgeColor}
              size="md"
              layout="circle"
              position="left"
              className="top-0 start-0 relative mr-2"
            >
              {badge}
            </Badge>
          )}
          {title}
        </Heading>
      )}
      {typeof message === "string" ? (
        <div
          className="text-base md:text-lg lg:text-xl mb-[1em] mt-[1em]"
          dangerouslySetInnerHTML={{ __html: message }}
        ></div>
      ) : (
        <div className="text-base md:text-lg lg:text-xl mb-[1em] mt-[1em]">{message}</div>
      )}

      {dismissable && (
        <CloseButton size="md" onClick={onClick} className="absolute right-2 top-2" />
      )}
    </blockquote>
  );
};

export default Alert;
