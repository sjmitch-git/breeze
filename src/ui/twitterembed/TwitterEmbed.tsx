"use client";

import React, { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Loading, Alert } from "..";
import { TwitterEmbedProps } from "./types";

declare global {
  interface Window {
    twttr?: {
      widgets: {
        createTweet: (
          tweetId: string,
          element: HTMLElement,
          options?: any
        ) => Promise<HTMLElement | null>;
        load: (el?: HTMLElement) => void;
      };
    };
  }
}

const loadTwitterScript = () =>
  new Promise<void>((resolve, reject) => {
    if (window.twttr?.widgets) return resolve();

    const existing = document.querySelector(
      'script[src="https://platform.twitter.com/widgets.js"]'
    );
    if (existing) {
      existing.addEventListener("load", () => resolve());
      return;
    }

    const s = document.createElement("script");
    s.src = "https://platform.twitter.com/widgets.js";
    s.async = true;
    s.onload = () => resolve();
    s.onerror = () => reject();
    document.body.appendChild(s);
  });

export const TwitterEmbed = ({
  handle,
  status,
  lang = "en",
  theme = "light",
  className = "",
  style,
}: TwitterEmbedProps) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;
    setLoading(true);
    setError(null);

    const init = async () => {
      try {
        await loadTwitterScript();
        if (!isMounted.current || !containerRef.current) return;

        containerRef.current.innerHTML = "";

        const options: any = {
          lang,
          theme,
          dnt: true,
        };

        const iframe = await window.twttr!.widgets.createTweet(
          status,
          containerRef.current,
          options
        );

        if (isMounted.current) {
          if (iframe) {
            setLoading(false);
            setError(null);
          } else {
            setError("Failed to embed tweet");
            setLoading(false);
          }
        }
      } catch (err) {
        if (isMounted.current) {
          setError("Failed to load X widget");
          setLoading(false);
        }
      }
    };

    init();

    return () => {
      isMounted.current = false;
    };
  }, [handle, status, theme]);

  if (!status) {
    return (
      <div className={twMerge("twitter-wrap", className)} style={style}>
        <Alert status="error" title="Invalid" message="No post ID provided." />
      </div>
    );
  }

  return (
    <div
      className={twMerge(
        "twitter-wrap flex flex-col justify-center w-full dark:text-light",
        className
      )}
      style={style}
    >
      {loading && !error && (
        <div className="py-8 text-info flex w-full justify-center mb-8">
          <Loading loadingColor="info" size="md" spinner="dots" caption="Loading" />
        </div>
      )}

      {error && (
        <div className="py-8 mb-8">
          <Alert status="error" title="Error" message={error} />
        </div>
      )}

      <div ref={containerRef} className="flex justify-center" />

      {!loading && !error && (
        <div className="mt-4 text-center text-sm text-gray-500">
          <a
            href={`https://twitter.com/${handle}/status/${status}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            View on X
          </a>
        </div>
      )}
    </div>
  );
};

export default TwitterEmbed;
