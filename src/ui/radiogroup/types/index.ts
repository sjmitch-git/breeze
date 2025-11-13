export interface RadioGroupProps {
  data: any[];
  getIcon?: (key: string) => void;
  legend?: string;
  icons?: boolean;
  className?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  labelStyles?: string;
  name?: string;
  hideInput?: boolean;
  columns?: 1 | 2 | 3 | 4 | 5 | 6;
  size?: "sm" | "md" | "lg" | "xl";
  legendAlign?: "left" | "center" | "right";
  hasBorder?: boolean;
  legendBold?: boolean;
  spacing?: "4" | "8";
  roundedRadio?: "none" | "md" | "lg" | "full";
  defaultChecked?: string;
}
