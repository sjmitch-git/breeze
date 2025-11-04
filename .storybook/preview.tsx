import { useEffect } from "react";
import type { Preview } from "@storybook/nextjs-vite";
import { withThemeByClassName } from "@storybook/addon-themes";
import "../src/styles/index.css";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: "todo",
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
    (Story, context) => {
      useEffect(() => {
        window.gtag("config", "G-JKVR4XLTMW", {
          page_path: window.location.pathname + window.location.search,
        });
      }, [context.id]);
      return (
        <div className="preview-decorator bg-slate-50 dark:bg-slate-700 dark:text-light p-4">
          <Story />
        </div>
      );
    },
  ],
  tags: ["autodocs"],
};

export default preview;
