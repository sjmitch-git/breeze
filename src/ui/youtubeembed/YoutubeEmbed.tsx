import React from "react";
import { YoutubeEmbedProps } from "./types";

import { twMerge } from "tailwind-merge";

const YoutubeEmbed = ({
  className = "",
  style,
  videoId,
  title = "YouTube video player",
  playerParams = {},
  loading = "lazy",
  allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
  ...iframeProps
}: YoutubeEmbedProps) => {
  const baseUrl = "https://www.youtube-nocookie.com/embed/";
  const params = new URLSearchParams(playerParams as Record<string, string>).toString();
  const embedUrl = `${baseUrl}${videoId}?${params}`;

  return (
    <div className={twMerge("aspect-video w-full ", className)} style={style}>
      <iframe
        className="w-full h-full"
        src={embedUrl}
        title={title}
        allowFullScreen
        loading={loading}
        referrerPolicy="strict-origin-when-cross-origin"
        allow={allow}
        {...iframeProps}
      />
    </div>
  );
};

export default YoutubeEmbed;
