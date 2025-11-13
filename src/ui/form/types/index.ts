// Base Color Options
type BaseColorOption =
  | "dark"
  | "light"
  | "info"
  | "success"
  | "warning"
  | "danger"
  | "primary"
  | "secondary";

// Extended Color Options
type ColorOption = BaseColorOption | "current";
type OutlineColorOption = ColorOption | "accent";
type BackgroundOption = BaseColorOption | "transparent";

// Spacing and Alignment Options
type SpacingOption = "0" | "1" | "2" | "4" | "8";
type AlignOption = "left" | "center" | "right";
type SizeOption = "sm" | "md" | "lg" | "xl";

// Common Props Interface
interface CommonFormProps {
  name?: string;
  action?: string;
  layout?: "col" | "row";
  className?: string;
  style?: React.CSSProperties;
  onFormSubmit?: (formData: { [key: string]: string }) => void;
  onCancel?: () => void;
  showCancel?: boolean;
  actions?: boolean;
  actionsLayout?: "row" | "row-reverse" | "col" | "col-reverse";
  actionsSpacing?: SpacingOption;
  separator?: boolean;
  submitLabel?: string;
  cancelLabel?: string;
  submitBackground?: BackgroundOption;
  submitColor?: ColorOption;
  cancelBackground?: BackgroundOption;
  cancelColor?: ColorOption;
  submitOutline?: boolean;
  submitOutlineColor?: OutlineColorOption;
  cancelOutline?: boolean;
  cancelOutlineColor?: ColorOption;
  buttonTextcase?: "uppercase" | "lowercase" | "capitalize" | "normal-case";
  buttonShape?: "default" | "rounded" | "pill";
  buttonIsBold?: boolean;
}

// Form Props Interface
export interface FormProps extends React.HTMLAttributes<HTMLFormElement>, CommonFormProps {
  method?: "GET" | "POST" | "dialog" | string;
  enctype?: "application/x-www-form-urlencoded" | "multipart/form-data" | "text/plain" | string;
}

// Fieldset Props Interface
export interface FieldsetProps extends React.FieldsetHTMLAttributes<HTMLFieldSetElement> {
  legendText?: string;
  disabled?: boolean;
  legendAlign?: AlignOption;
  legendSize?: SizeOption;
  hasBorder?: boolean;
  isBold?: boolean;
  spacing?: "4" | "8";
  className?: string;
}

// Legend Props Interface
export interface LegendProps extends React.HTMLProps<HTMLLegendElement> {
  text: string;
  isBold?: boolean;
  align?: AlignOption;
  legendSize?: SizeOption;
}

// Register Form Props Interface
export interface RegisterFormProps extends CommonFormProps {
  legendText: string;
  legendisBold?: boolean;
  legendAlign?: AlignOption;
  legendSize?: SizeOption;
  spacing?: "4" | "8";
  hasBorder?: boolean;
  buttonOutline?: boolean;
  userLabel: string;
  userAutocomplete?: "username" | "email" | "username email";
  userPlaceholder?: string;
  passwordLabel: string;
  passwordPlaceholder?: string;
  passwordPattern?: string;
  passwordTitle?: string;
  confirmLabel: string;
  confirmPlaceholder?: string;
  confirmTitle?: string;
  inputsLayout?: "col" | "row";
  inputsSize?: "md" | "lg" | "xl";
  inputsRounded?: "none" | "md" | "lg" | "full";
  checkLabel: string;
  checkLabelIsBold?: boolean;
  checkRounded?: "none" | "full";
  checkHint?: React.ReactNode;
}
