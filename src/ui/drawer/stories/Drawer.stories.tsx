import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Drawer } from "..";
import { DrawerProps } from "../types";
import { Form } from "../..";
import { NewsletterForm } from "../../form/stories/Form.stories";

const meta: Meta = {
  title: "Menus/Drawer",
  component: Drawer,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
The **Drawer** component provides a convenient sliding panel to display additional content without leaving the main screen. It’s highly customizable, making it adaptable to various layouts and contexts within your UI.

### Key Features:
- **Backdrop Support:** Enables an overlay behind the drawer to focus user attention.
- **Positioning Options:** Choose between \`top\` or \`bottom\` placement.
- **Flexible Content:** Accepts any content, including forms, lists, and media.
- **Interactive Control:** Built-in event handling to easily toggle open and close states.

### Import:
\`\`\`jsx
import { Drawer } from '@smitch/breeze';
\`\`\`

### Example Usage:
\`\`\`jsx
<Drawer
  backdrop={true}
  position="bottom"
  open={false}
  onClose={() => console.log("Drawer closed")}
/>
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
  },
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: DrawerProps) => {
    const [open, setOpen] = useState(args.open);

    const handleClose = () => {
      setOpen(false);
    };

    return (
      <>
        <button
          onClick={() => setOpen(!open)}
          className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Open Drawer
        </button>
        <Drawer {...args} open={open} onClose={handleClose}>
          <div>
            <p>
              Some simple <strong className="text-accent">HTML</strong> content
            </p>
          </div>
        </Drawer>
      </>
    );
  },

  args: {
    backdrop: true,
    position: "bottom",
    open: false,
  },
};

export const WithForm: Story = {
  render: (args: DrawerProps) => {
    const [open, setOpen] = useState(args.open);

    const handleClose = () => {
      setOpen(false);
    };

    const handleSubmit = (data: any) => {
      console.log("form data", data);
      handleClose();
    };

    return (
      <>
        <button
          onClick={() => setOpen(!open)}
          className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Open Drawer
        </button>
        <Drawer {...args} open={open} onClose={handleClose}>
          <Form
            {...NewsletterForm.args}
            className="max-w-2xl pb-4 mx-auto"
            onsubmit={handleSubmit}
          >
            {NewsletterForm.args?.children}
          </Form>
        </Drawer>
      </>
    );
  },

  args: {
    backdrop: true,
    position: "bottom",
    open: false,
  },
};
