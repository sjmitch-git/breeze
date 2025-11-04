"use client";

import React, { useEffect, useRef } from "react";
import { DialogProps } from "./types";
import { CloseButton } from "..";

import { useDisableBack } from "./hooks/useDisableBack";

const Dialog = ({
  open = false,
  modal = true,
  showClose = true,
  onClose,
  title,
  titleSize = "lg",
  closeBtnSize = "md",
  titleBold = false,
  children,
}: DialogProps) => {
  useDisableBack(modal);
  const dialog = useRef<HTMLDialogElement>(null!);

  useEffect(() => {
    const dialogRef = dialog.current;
    const handleClose = () => {
      if (modal) document.body.style.overflow = "";
    };

    if (dialogRef) dialogRef.addEventListener("close", handleClose, false);

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keyup", handleEscape, false);

    if (open) {
      if (modal) {
        dialogRef.showModal();
        document.body.style.overflow = "hidden";
      } else dialogRef.show();
    } else dialogRef.close();

    return () => {
      handleClose();
      if (dialogRef) dialogRef.removeEventListener("close", handleClose, false);
      document.removeEventListener("keyup", handleEscape, false);
    };
  }, [open, modal, onClose]);

  return (
    <dialog
      id="dialog"
      ref={dialog}
      className={`dialog backdrop:bg-black dark:backdrop:bg-light backdrop:opacity-60 border-none ${
        modal
          ? " bg-light dark:bg-dark dark:text-light"
          : "bg-dark text-light dark:bg-light dark:text-dark rounded-md"
      }`}
    >
      <div className="dialog-header p-4">
        {title && (
          <h2
            className={`dialog-title ${modal ? "text-center" : "text-start"} text-${titleSize} ${
              titleBold ? "font-bold" : "font-normal"
            }`}
          >
            {title}
          </h2>
        )}
        {showClose && (
          <CloseButton
            onClick={onClose}
            layout="circle"
            size={closeBtnSize}
            className={`absolute right-1 top-1`}
          />
        )}
      </div>
      <div className={`dialog-content ${modal ? "p-0" : "p-4"} pt-0 min-w-[280px] max-w-md`}>
        {children}
      </div>
    </dialog>
  );
};

export default Dialog;
