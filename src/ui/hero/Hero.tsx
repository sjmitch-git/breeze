"use client";

import React, { useEffect, useState, useMemo } from "react";

import { twMerge } from "tailwind-merge";

import { HeroProps } from "./types";

import { Heading } from "..";

const randomImageEndpoint = "https://loremflickr.com";

const defaultCategoryTags = "abstract,nature,texture,pattern";

const themeClasses = {
  responsive: "bg-white text-dark dark:bg-black dark:text-light",
  dark: "dark bg-black text-light",
  light: "bg-white text-dark",
};

const alignClasses = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

const layoutClasses = {
  col: "grid-cols-1",
  row: "grid-cols-1 md:grid-cols-2",
};

const grayscaleClasses = {
  none: "",
  grayscale: "grayscale",
  sepia: "sepia",
};

const aspectRatios = {
  auto: "aspect-auto",
  square: "aspect-square",
  video: "aspect-video",
  landscape: "aspect-[4/3]",
};

const dimensions = {
  auto: { width: 1200, height: 800 },
  square: { width: 800, height: 800 },
  video: { width: 1280, height: 720 },
  landscape: { width: 1200, height: 900 },
};

const Hero = ({
  title,
  body,
  align = "center",
  layout = "col",
  aspectRatio = "auto",
  titleLevel = 1,
  titleTransform,
  titleWeight,
  theme = "responsive",
  bgImage,
  bgVideo,
  bgVideoPoster,
  randomImage = false,
  categoryTags = defaultCategoryTags,
  bgBlur = false,
  bgGrayscale = "none",
  children,
  className = "",
  style,
}: HeroProps) => {
  const [bgImageStyle, setBgImageStyle] = useState<any | null>();
  const [bgVideoSrc, setBgVideoSrc] = useState<any | null>();

  const generatedImage = useMemo(() => {
    if (!randomImage) return null;

    const { width, height } = dimensions[aspectRatio] || dimensions.auto;

    return {
      url: `${randomImageEndpoint}/${width}/${height}/${
        categoryTags || defaultCategoryTags
      }?random=${Date.now()}`,
      width,
      height,
    };
  }, [randomImage, categoryTags, aspectRatio]);

  useEffect(() => {
    const finalImage = randomImage ? generatedImage?.url : bgImage;
    if (finalImage) {
      setBgImageStyle({
        backgroundImage: `url(${finalImage})`,
      });
    } else {
      setBgImageStyle(null);
    }
  }, [bgImage, generatedImage, randomImage]);

  useEffect(() => {
    if (bgVideo) {
      setBgVideoSrc(bgVideo);
    }
  }, [bgVideo]);

  return (
    <div
      className={twMerge(
        `hero relative overflow-hidden grid justify-between ${aspectRatios[aspectRatio]} ${layoutClasses[layout]} gap-x-4 gap-y-8 px-4 py-5 ${themeClasses[theme]}`,
        className
      )}
      style={style}
    >
      {bgImageStyle ? (
        <div
          className={`bg-cover bg-no-repeat bg-center absolute inset-0 ${bgBlur ? "blur-sm" : ""} ${
            grayscaleClasses[bgGrayscale]
          }`}
          style={bgImageStyle}
        ></div>
      ) : null}
      {bgVideoSrc ? (
        <video
          className={`absolute inset-0 h-full w-full object-cover ${bgBlur ? "blur-sm" : ""} ${
            grayscaleClasses[bgGrayscale]
          }`}
          src={bgVideoSrc}
          poster={bgVideoPoster}
          loop
          autoPlay
          muted
          controls={false}
          preload="auto"
        />
      ) : null}

      <div className="max-w-xl relative mx-auto z-10 w-full">
        <Heading
          level={titleLevel}
          align={align}
          transform={titleTransform}
          weight={titleWeight}
          className="mb-6 drop-shadow-lg"
        >
          {title}
        </Heading>
        {body ? <div className={alignClasses[align]}>{body}</div> : ""}
      </div>
      {children ? (
        <div className={`max-w-xl flex items-center ${layout === "col" ? "mx-auto" : ""}`}>
          {children}
        </div>
      ) : null}
    </div>
  );
};

export default Hero;
