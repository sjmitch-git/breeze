import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Badge } from "..";
import { Heading } from "../..";
import { FaStar } from "react-icons/fa6";

const meta: Meta = {
  title: "Feedback/Badge",
  component: Badge,
  argTypes: {
    position: {
      options: ["inline", "right", "left"],
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
The **Badge** component is used to display small labels or notifications on other UI elements. It supports various layouts, positions, and content types, making it versatile for indicating statuses, counts, or other contextual information.

### Key Features:
- **Positioning**: Can be positioned inline with text, or floated to the left or right of its parent.
- **Layout**: Configurable as \`square\`, \`circle\`, \`rounded\`, or \`pill\` shapes.
- **Content**: Accepts any children, including icons, emojis, or plain text.
- **Styling**: Easily customizable using Tailwind CSS classes for background, color, and size.

### Import
\`\`\`tsx
import { Badge } from '@smitch/breeze'
\`\`\`

### Example Usage:
\`\`\`tsx
import { FaStar } from "react-icons/fa6";

<Badge position="inline" layout="circle" background="info" color="dark">
  <FaStar />
</Badge>
\`\`\`
`,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Icon",
  argTypes: {
    layout: {
      options: ["square", "circle"],
    },
  },
  args: {
    children: <FaStar />,
    position: "inline",
    size: "inherit",
    layout: "circle",
    badgeBackground: "info",
    badgeColor: "dark",
  },
};

Default.decorators = [
  (Story) => (
    <div className="relative p-4">
      <Heading level={2} className="relative">
        Latest Post <Story />
      </Heading>
    </div>
  ),
];

export const Emoji: Story = {
  decorators: Default.decorators,
  argTypes: {
    layout: {
      table: {
        disable: true,
      },
    },
    badgeColor: {
      table: {
        disable: true,
      },
    },
    badgeBackground: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    ...Default.args,
    position: "inline",
    children: "🙂",
    layout: "circle",
    badgeBackground: "transparent",
    className: "p-0",
  },
};

export const Text: Story = {
  decorators: Default.decorators,
  argTypes: {
    layout: {
      options: ["rounded", "pill"],
    },
    position: {
      options: ["inline", "right"],
    },
    children: {
      table: {
        disable: false,
      },
    },
  },
  args: {
    ...Default.args,
    children: "New",
    layout: "rounded",
    badgeBackground: "accent",
    badgeColor: "dark",
  },
};

export const TextAndIcon: Story = {
  decorators: Default.decorators,
  argTypes: {
    layout: {
      options: ["rounded", "pill"],
    },
    position: {
      options: ["inline", "right"],
    },
  },
  args: {
    ...Default.args,
    children: (
      <>
        <FaStar />
        New
      </>
    ),
    layout: "rounded",
    badgeBackground: "success",
    badgeColor: "light",
  },
};

export const Empty: Story = {
  decorators: Default.decorators,
  argTypes: {
    layout: {
      options: ["square", "circle"],
    },
    position: {
      options: ["inline", "left", "right"],
    },
    badgeColor: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    position: "inline",
    layout: "circle",
    badgeBackground: "warning",
    size: "inherit",
  },
};
