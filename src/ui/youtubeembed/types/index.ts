interface PlayerParamsProps {
  autoplay?: 0 | 1;
  controls?: 0 | 1;
  loop?: 0 | 1;
  mute?: 0 | 1;
  start?: number;
  end?: number;
  modestbranding?: 0 | 1;
  rel?: 0 | 1;
  fs?: 0 | 1;
  cc_load_policy?: 0 | 1;
  playsinline?: 0 | 1;
}

interface IFrameProps {
  loading?: "eager" | "lazy";
  allow?: string;
}

export interface YoutubeEmbedProps extends IFrameProps {
  className?: string;
  style?: React.CSSProperties;
  videoId: string;
  title?: string;
  playerParams?: PlayerParamsProps;
}
