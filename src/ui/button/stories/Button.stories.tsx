import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FaPlus, FaTrashAlt } from "react-icons/fa";
import { Button } from "..";

const meta: Meta = {
  title: "Buttons/Button",
  component: Button,
  args: {
    layout: "default",
    textcase: "capitalize",
    isBold: false,
    btnBackground: "primary",
    btnColor: "light",
    size: "lg",
    outline: false,
    outlineColor: "secondary",
    shadow: "none",
    disabled: false,
  },
  argTypes: {
    disabled: {
      options: [false, true],
      control: { type: "radio" },
    },
    outline: {
      options: [false, true],
      control: { type: "radio" },
    },
    role: {
      table: {
        disable: true,
      },
    },
    tabindex: {
      table: {
        disable: true,
      },
    },
    id: {
      table: {
        disable: true,
      },
    },
    type: {
      table: {
        disable: true,
      },
    },
    title: {
      table: {
        disable: true,
      },
    },
    onClick: {
      table: {
        disable: true,
      },
    },
    onBlur: {
      table: {
        disable: true,
      },
    },
  },
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
The **Button** component provides a customizable button for various use cases. It supports different sizes, layouts, colors, and behaviors, making it a versatile component for any UI.

### Key Features:
- **Flexible Layouts**: Supports layouts like \`default\`, \`rounded\`, \`pill\`, \`circle\`, and more.
- **Customizable Styles**: Allows control over background color, text color, outline, and shadows.
- **Size Options**: Available in \`xs\`, \`sm\`, \`md\`, \`lg\`, and \`xl\`.
- **State Management**: Supports disabled state and different behaviors based on user interaction.
- **Icon Support**: You can use icons alongside or instead of text.

### Import:
\`\`\`tsx
import { Button } from '@smitch/breeze'
\`\`\`

### Usage Example:
\`\`\`tsx
<Button
  size="lg"
  layout="pill"
  isBold={true}
  onClick={() => alert('Button clicked!')}
>
  Click Me!
</Button>
\`\`\`
`,
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Text",
  args: {
    children: "Click!",
    hoverScale: true,
  },
};

export const Icon: Story = {
  argTypes: {
    textcase: {
      table: {
        disable: true,
      },
    },
    isBold: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    children: (
      <>
        <FaPlus />
        <span className="sr-only">Add Item</span>
      </>
    ),
    hoverScale: true,
    layout: "circle",
  },
};

export const TextAndIcon: Story = {
  args: {
    children: (
      <>
        <FaPlus />
        Add Item
      </>
    ),
    hoverScale: true,
    layout: "pill",
  },
};

export const DeleteButton: Story = {
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    children: (
      <>
        <FaTrashAlt />
        <span className="sr-only">Delete Item</span>
      </>
    ),
    hoverScale: true,
    layout: "circle",
    btnBackground: "danger",
    btnColor: "light",
    outline: false,
    size: "lg",
    title: "Delete Item?",
  },
};
