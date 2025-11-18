import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Modal } from "..";
import { ModalProps } from "../types";
import Data from "../../../data/dogs.json";

const data = Data[0];

const codeExample = `<Modal
  src={data.src}
  caption={data.name}
  alt={data.name}
  open={isOpen}
  theme="dark"
  onClick={() => setOpen(false)}
/>`;

const meta: Meta<ModalProps> = {
  title: "Media/Modal",
  component: Modal,
  parameters: {
    docs: {
      description: {
        component: `
The **Modal** component is a flexible UI element that displays an image in a pop-up dialog, typically overlaying the current view..

### Key Features:
- Customizable appearance with light and dark themes.
- Ability to open and close the modal dynamically through props or user interaction.
- Configurable with captions and alt text for media accessibility.

### Import:
\`\`\`jsx
import { Modal } from '@smitch/breeze'
ick={() => setOpen(false)}
/>
\`\`\`

### Example Usage:
\`\`\`jsx
const [open, setOpen] = useState(true)

<Modal
  src={data.src}
  caption={data.name}
  alt={data.name}
  open={open}
  theme="dark"
  onClick={() => setOpen(false)}
/>
\`\`\`
				`,
      },
      source: {
        code: codeExample,
      },
    },
  },
  argTypes: {
    open: {
      description: "Controls whether the modal is open or closed.",
      control: { type: "boolean" },
    },
    src: {
      description: "The source of the media to display in the modal.",
      control: "text",
    },
    caption: {
      description: "Caption for the media.",
      control: "text",
    },
    alt: {
      description: "Alternative text for accessibility.",
      control: "text",
    },
    theme: {
      description: "Theme for the modal appearance.",
      control: { type: "radio" },
      options: ["light", "dark"],
    },
    onClick: {
      table: {
        disable: true,
      },
      action: "clicked",
      description: "Function to handle closing the modal.",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<ModalProps>;

export default meta;

type Story = StoryObj<ModalProps>;

const ModalComponent = (args: ModalProps) => {
  const [open, setOpen] = useState(args.open);

  return (
    <>
      <button
        onClick={() => setOpen(true)} // Open the modal
        className="bg-blue-800 font-semibold text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Open Modal
      </button>
      <Modal {...args} open={open} onClick={() => setOpen(false)} />
    </>
  );
};

export const ImageModal: Story = {
  parameters: {
    docs: {
      source: {
        code: codeExample,
      },
    },
  },
  render: (args) => <ModalComponent {...args} />,
  args: {
    src: data.src,
    caption: data.name,
    alt: data.name,
    open: false,
    theme: "dark",
  },
};

ImageModal.argTypes = {
  src: {
    control: "text",
  },
  caption: {
    control: "text",
  },
  alt: {
    control: "text",
  },
  open: {
    control: { type: "boolean" },
  },
  theme: {
    control: { type: "radio" },
    options: ["light", "dark"],
  },
};
