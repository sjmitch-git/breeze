export interface TwitterEmbedProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  style?: React.CSSProperties;
  handle: string;
  status: string;
  theme?: "light" | "dark" | undefined;
  lang?: string;
}
