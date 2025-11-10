import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PlaceHolder } from "..";

const meta: Meta<typeof PlaceHolder> = {
  title: "Media/Image Placeholder",
  component: PlaceHolder,
  parameters: {
    docs: {
      description: {
        component: `
PlaceHolder is a utility component that generates customizable placeholder images.
It uses the [PlaceHold.co](https://placehold.co) service for generating placeholders.

### Key Features:
- Dynamically customizable size, colors, and text.
- Supports both PNG and SVG formats.

### Import
\`\`\`tsx
import { PlaceHolder } from '@smitch/fluid'
\`\`\`

### Example Usage:
\`\`\`tsx
<PlaceHolder
  width="288"
  height="200"
  background="orange"
  color="white"
  text="Brand"
  format="png"
/>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    width: {
      description: "Width of the placeholder (in pixels).",
      control: "text",
      defaultValue: "288",
    },
    height: {
      description:
        "Height of the placeholder (optional). Defaults to width if not provided.",
      control: "text",
    },
    background: {
      description: "Background color of the placeholder.",
      control: "color",
    },
    color: {
      description: "Text color for the placeholder.",
      control: "color",
    },
    text: {
      description: "Custom text to display on the placeholder.",
      control: "text",
      defaultValue: "",
    },
    format: {
      description: "Format of the placeholder image (png or svg).",
      control: "radio",
      options: ["png", "svg"],
      defaultValue: "png",
    },
    className: {
      description: "Additional classes for styling.",
      control: "text",
    },
    style: {
      description: "Inline styles for the image.",
      control: "object",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PlaceHolder>;

export const Default: Story = {
  args: {
    width: "288",
  },
};

export const CustomColors: Story = {
  args: {
    width: "288",
    height: "200",
    background: "orange",
    color: "white",
    text: "Custom Text",
    format: "png",
  },
};

export const SquareSVG: Story = {
  args: {
    width: "288",
    format: "svg",
    text: "SVG Placeholder",
  },
};
