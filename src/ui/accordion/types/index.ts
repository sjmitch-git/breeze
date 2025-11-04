interface DataProps {
  id: string;
  title?: string;
  name: string;
  description: string;
  body?: string;
  src: string;
  link: string;
}

export interface AccordionProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "sm" | "md" | "lg";
  data?: DataProps[];
  children?: React.ReactNode;
  opened?: string;
  layout?: "default" | "flush" | "spaced";
  background?: "responsive" | "transparent";
  icon?: "symbol" | "arrow";
  iconPosition?: "left" | "right";
  iconColor?: "info" | "success" | "warning" | "danger" | "primary" | "secondary" | "current";
}

export interface AccordionHeadProps {
  icon?: "symbol" | "arrow";
  id: string;
  open: string;
  setopen: (id: string) => void;
  title?: string;
  name?: string;
  iconPosition?: "left" | "right";
  iconColor?: "info" | "success" | "warning" | "danger" | "primary" | "secondary" | "current";
  layout?: "default" | "flush" | "spaced";
}

export interface AccordionCardProps {
  src?: string;
  title: string;
  description?: string;
  link?: string;
}

export interface AccordionSectionProps {
  children: React.ReactNode;
}

export interface AccordionItemProps {
  children: React.ReactNode;
  layoutClasses: string;
  id: string;
  title: string;
  icon?: "symbol" | "arrow";
  iconPosition?: "left" | "right";
  iconColor?: "info" | "success" | "warning" | "danger" | "primary" | "secondary" | "current";
  layout?: "default" | "flush" | "spaced";
  background?: "responsive" | "transparent";
  open: string;
  setOpen: (id: string) => void;
  className?: string;
}
