import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Toast } from "..";
import { ToastProps } from "../types";

const meta: Meta = {
  title: "Feedback/Toast",
  component: Toast,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
The **Toast** component provides feedback messages that are typically used for temporary notifications. These notifications appear in different parts of the UI, disappear after a set time, or can be manually closed.

### Key Features:
- **Configurable Position**: Position the toast anywhere on the screen (top, bottom, center).
- **Auto-hide Support**: Automatically close after a set duration, or keep it persistent until manually closed.
- **Customizable Appearance**: Supports different background colors, text colors, and rounded corners.
- **Closable**: Optional close button for manual dismissal.

### Import:
\`\`\`tsx
import { Toast } from '@smitch/breeze'
\`\`\`

### Usage Example:
\`\`\`tsx
const [open, setOpen] = useState(false);

return (
  <>
    <button onClick={() => setOpen(true)}>Open Toast</button>
    <Toast
      open={open}
      body="Notification message goes here"
      onClose={() => setOpen(false)}
      toastBackground="info"
      autohide={true}
      autohideDuration={3000}
      horizontal="center"
      vertical="top"
    />
  </>
)
\`\`\`
`,
      },
    },
  },
  argTypes: {
    open: {
      table: {
        disable: true,
      },
    },
    onClose: {
      table: {
        disable: true,
      },
    },
    onClick: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: ToastProps) => {
    const [open, setOpen] = useState(args.open);

    const handleClose = () => {
      setOpen(false);
    };

    const handleClick = () => {
      setOpen(false);
    };

    return (
      <>
        <button
          onClick={() => setOpen(!open)}
          className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Open Toast
        </button>
        <Toast {...args} open={open} onClose={handleClose} onClick={handleClick} />
      </>
    );
  },

  args: {
    open: false,
    body: (
      <p className="font-semibold">
        Some simple <code>HTML</code> <em>message</em>
      </p>
    ),
    horizontal: "center",
    vertical: "middle",
    rounded: "md",
    toastBackground: "info",
    autohide: true,
    autohideDuration: 3000,
    closeOnBlur: false,
    dismissable: false,
  },
};
