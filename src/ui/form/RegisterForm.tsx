"use client";

import React, { useState } from "react";
import { Form, Fieldset, TextInput, PasswordInput, Checkbox } from "..";
import { RegisterFormProps } from "./types";

const RegisterForm = ({
  action,
  actionsLayout = "row",
  actionsSpacing = "0",
  onCancel,
  onFormSubmit,
  showCancel = true,
  submitLabel = "Register",
  cancelLabel = "Cancel",
  submitBackground = "primary",
  submitColor = "light",
  submitOutlineColor = "current",
  cancelBackground = "transparent",
  cancelColor = "current",
  cancelOutlineColor = "current",
  separator = true,
  name = "register",
  className = "",
  style,
  buttonOutline = false,
  buttonTextcase = "normal-case",
  buttonShape = "default",
  buttonIsBold = true,
  legendText = "Register",
  legendisBold = true,
  legendAlign = "center",
  legendSize = "md",
  spacing = "4",
  hasBorder = false,
  userLabel,
  userAutocomplete = "email",
  userPlaceholder,
  passwordLabel,
  passwordPlaceholder,
  passwordPattern,
  passwordTitle,
  confirmLabel,
  confirmPlaceholder,
  confirmTitle,
  inputsLayout = "col",
  inputsSize = "md",
  inputsRounded = "none",
  checkLabel,
  checkLabelIsBold,
  checkRounded,
  checkHint,
}: RegisterFormProps) => {
  const [newpassword, setNewpassword] = useState("");

  const handleCreatePassword = (value: string) => {
    setNewpassword(value);
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
  };

  const handleSubmit = () => {
    console.log("handleSubmit");
  };

  return (
    <Form
      action={action}
      actionsLayout={actionsLayout}
      actionsSpacing={actionsSpacing}
      onCancel={handleCancel}
      onFormSubmit={handleSubmit}
      showCancel={showCancel}
      submitLabel={submitLabel}
      submitBackground={submitBackground}
      submitColor={submitColor}
      submitOutline={buttonOutline}
      submitOutlineColor={submitOutlineColor}
      cancelLabel={cancelLabel}
      cancelBackground={cancelBackground}
      cancelColor={cancelColor}
      cancelOutline={buttonOutline}
      cancelOutlineColor={cancelOutlineColor}
      separator={separator}
      name={name}
      method="POST"
      className={className}
      style={style}
      buttonTextcase={buttonTextcase}
      buttonShape={buttonShape}
      buttonIsBold={buttonIsBold}
    >
      <Fieldset
        legendText={legendText}
        legendSize={legendSize}
        isBold={legendisBold}
        spacing={spacing}
        legendAlign={legendAlign}
        hasBorder={hasBorder}
      >
        <TextInput
          label={userLabel}
          autocomplete={userAutocomplete}
          placeholder={userPlaceholder}
          name="user-name"
          id="user-name"
          required
          layout={inputsLayout}
          size={inputsSize}
          rounded={inputsRounded}
        />
        <PasswordInput
          name="newpassword"
          label={passwordLabel}
          placeholder={passwordPlaceholder}
          title={passwordTitle}
          autocomplete="new-password"
          pattern={passwordPattern}
          onInputChange={handleCreatePassword}
          layout={inputsLayout}
          size={inputsSize}
          rounded={inputsRounded}
          required
          hint
        />
        <PasswordInput
          label={confirmLabel}
          autocomplete="new-password"
          placeholder={confirmPlaceholder}
          title={confirmTitle}
          name="confirmpassword"
          pattern={newpassword}
          layout={inputsLayout}
          size={inputsSize}
          rounded={inputsRounded}
          required
          hint
        />
        <Checkbox
          label={checkLabel}
          labelIsBold={checkLabelIsBold}
          size={inputsSize}
          rounded={checkRounded}
          name="terms"
          required
          hint={checkHint}
        />
      </Fieldset>
    </Form>
  );
};

export default RegisterForm;
