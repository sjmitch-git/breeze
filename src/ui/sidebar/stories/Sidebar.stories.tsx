import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Sidebar } from "..";
import { SidebarProps } from "../types";
import { Tabs } from "../..";
import { LoginRegister } from "../../tabs/stories/Tabs.stories";

const meta: Meta = {
  title: "Menus/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
The **Sidebar** component is a sliding panel that appears from the side of the screen, providing a dedicated area for navigation, forms, or other content without leaving the current view. Its flexible positioning, backdrop, and customizable content make it highly adaptable for many UI needs.

### Key Features:
- **Positioning Options:** Choose between \`left\` or \`right\` positioning to match your layout requirements.
- **Backdrop Support:** Adds a backdrop overlay for enhanced focus and user interaction.
- **Flexible Content:** Accepts any child components, such as tabs, forms, or lists, for versatile use cases.
- **Interactive Control:** Includes event handling to toggle the sidebar's open and close state.

### Import:
\`\`\`jsx
import { Sidebar } from '@smitch/breeze';
\`\`\`

### Example Usage:
\`\`\`jsx
<Sidebar
    backdrop={true}
    position="right"
    open={false}
    onClose={() => console.log("Sidebar closed")}
>
    <Tabs {...LoginRegister.args}>{LoginRegister.args?.children}</Tabs>
</Sidebar>
\`\`\`
`,
      },
    },
  },
  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
    style: {
      table: {
        disable: true,
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
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
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = (args: SidebarProps) => {
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
        Open Sidebar
      </button>
      <Sidebar {...args} open={open} onClose={handleClose}>
        <Tabs {...LoginRegister.args}>{LoginRegister.args?.children}</Tabs>
      </Sidebar>
    </>
  );
};

Default.args = {
  backdrop: true,
  position: "right",
  open: false,
};
