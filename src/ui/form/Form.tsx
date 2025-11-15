"use client";

import React, { useRef, useState, useCallback, useMemo, forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "..";
import { FormProps } from "./types";

const layouts = {
  col: "flex-col",
  row: "flex-row flex-wrap",
};

const Form = forwardRef<HTMLFormElement, FormProps>(
  (
    {
      className = "",
      style,
      name = "form",
      onFormSubmit,
      onCancel,
      layout = "col",
      showCancel = false,
      actions = true,
      children,
      submitLabel = "Submit",
      cancelLabel = "Cancel",
      actionsLayout = "row",
      actionsSpacing = "0",
      submitBackground = "primary",
      submitColor = "light",
      cancelBackground = "transparent",
      cancelColor = "current",
      submitOutline = false,
      submitOutlineColor = "current",
      cancelOutline = false,
      cancelOutlineColor = "current",
      buttonTextcase = "normal-case",
      buttonShape = "default",
      buttonIsBold = false,
      separator = false,
    },
    ref
  ) => {
    const internalRef = useRef<HTMLFormElement | null>(null);
    const [valid, setValid] = useState(false);
    const [formData, setFormData] = useState<Record<string, string>>({});
    const layoutClasses = useMemo(() => layouts[layout], [layout]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (internalRef.current && !internalRef.current.checkValidity()) {
        setValid(false);
        return;
      }

      if (onFormSubmit) {
        onFormSubmit(formData);
      }
    };

    const handleCancel = () => {
      if (onCancel) onCancel();
    };

    const handleInputChange = useCallback((event: Event) => {
      const target = event.target as HTMLInputElement | HTMLTextAreaElement;
      const { name, value } = target;
      setFormData((prev) => ({ ...prev, [name]: value }));

      if (internalRef.current) {
        setValid(internalRef.current.checkValidity());
      }
    }, []);

    // Merge external ref with internal ref
    const setRefs = useCallback(
      (node: HTMLFormElement | null) => {
        internalRef.current = node;
        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }

        if (node) {
          node.addEventListener("change", handleInputChange, true);
        }

        return () => {
          if (node) {
            node.removeEventListener("change", handleInputChange, true);
          }
        };
      },
      [handleInputChange, ref]
    );

    return (
      <form
        className={twMerge(`form group flex ${layoutClasses} gap-8`, className)}
        style={style}
        name={name}
        id={name}
        ref={setRefs}
        onSubmit={handleSubmit}
      >
        {children}
        {actions && (
          <>
            {separator && <hr className="border-neutral border-t-2 opacity-70" />}
            <div
              className={`form-actions mt-auto flex group justify-between flex-grow flex-${actionsLayout} gap-${actionsSpacing}`}
            >
              {showCancel && (
                <Button
                  type="button"
                  className="!justify-center flex-grow"
                  btnBackground={cancelBackground}
                  btnColor={cancelColor}
                  outline={cancelOutline}
                  outlineColor={cancelOutlineColor}
                  textcase={buttonTextcase}
                  layout={buttonShape}
                  isBold={buttonIsBold}
                  onClick={handleCancel}
                >
                  {cancelLabel}
                </Button>
              )}
              <Button
                type="submit"
                className="!justify-center flex-grow"
                btnBackground={submitBackground}
                btnColor={submitColor}
                outline={submitOutline}
                outlineColor={submitOutlineColor}
                textcase={buttonTextcase}
                layout={buttonShape}
                isBold={buttonIsBold}
                disabled={!valid}
              >
                {submitLabel}
              </Button>
            </div>
          </>
        )}
      </form>
    );
  }
);

Form.displayName = "Form";

export default Form;
