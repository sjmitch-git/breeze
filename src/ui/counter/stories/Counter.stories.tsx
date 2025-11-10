import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Counter } from "..";
import { round } from "@smitch/js-lib";

const meta: Meta = {
  title: "Inputs/Counter",
  component: Counter,
  decorators: [
    (Story) => (
      <div className="p-4">
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: `
The **Counter** component is used for numeric input, allowing users to increment or decrement a value within a defined range. This is ideal for quantity selectors, form inputs, and other interactive elements requiring precise user input.

### Key Features:
- **Customizable Range**: Define minimum and maximum values.
- **Step Control**: Increment or decrement by custom step values.
- **Button Shape & Color**: Adjustable button shape (\`square\`, \`rounded\`, etc.) and color for UI adaptability.
- **Layout Options**: Display options for vertical or horizontal alignment.
- **Event Handling**: Custom \`onCountChange\` event handler for user interactions.

### Import:
\`\`\`jsx
import { Counter } from '@smitch/breeze';
\`\`\`

### Example Usage:
\`\`\`jsx
<Counter
    min={1}
    max={9}
    value={1}
    step={1}
    btnShape="square"
    label="Amount"
    onCountChange={(count) => console.log('Count changed:', count)}
/>
\`\`\`
`,
      },
    },
  },
  argTypes: {
    min: {
      description: "The minimum allowed value for the counter.",
      control: "number",
      defaultValue: 1,
    },
    max: {
      description: "The maximum allowed value for the counter.",
      control: "number",
    },
    step: {
      description: "The step increment/decrement value.",
      control: "number",
      defaultValue: 1,
    },
    value: {
      description: "The initial value of the counter.",
      control: "number",
      defaultValue: 1,
    },
    btnShape: {
      description: "Shape of the increment/decrement buttons.",
      control: "select",
      defaultValue: "circle",
      table: {
        defaultValue: { summary: "circle" },
      },
    },
    btnBackground: {
      description: "Background color of the buttons.",
      control: "select",
      defaultValue: "dark",
      table: {
        defaultValue: { summary: "dark" },
      },
    },
    btnColor: {
      description: "Color of the button icons.",
      control: "select",
      defaultValue: "light",
      table: {
        defaultValue: { summary: "light" },
      },
    },
    layout: {
      description:
        "Layout orientation (e.g., `col` for column, `row` for row).",
      control: "text",
      defaultValue: "col",
      table: {
        defaultValue: { summary: "col" },
      },
    },
    title: {
      description: "Aria label for accessibility purposes.",
      control: "text",
    },
    hint: {
      description: "Shows title as a hint.",
      control: "boolean",
      defaultValue: false,
    },
    inputStyles: {
      description: "Custom styles applied to the input field.",
      control: "text",
      defaultValue: "max-w-[3em] border-neutral border-2",
      table: {
        defaultValue: { summary: "max-w-[3em] border-neutral border-2" },
      },
    },
    rounded: {
      description: "Border radius of the input field.",
      control: "text",
      defaultValue: "md",
      table: {
        defaultValue: { summary: "md" },
      },
    },
    onCountChange: {
      description: "Callback function triggered on value change.",
      action: "count changed",
      table: {
        disable: true,
      },
    },
    id: {
      table: {
        disable: true,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Counter>;

export default meta;
type Story = StoryObj<typeof meta>;

const onCountChange = (count: number) => {
  console.log("onCountChange", count);
};

export const Default: Story = {
  name: "Counter",
  argTypes: {
    layout: {
      options: ["col", "row"],
      control: "select",
    },
    size: {
      options: ["md", "lg"],
      control: "select",
    },
    rounded: {
      options: ["none", "md", "lg", "full"],
      control: "select",
    },
  },
  args: {
    min: 1,
    max: 9,
    value: 1,
    step: 1,
    btnShape: "circle",
    btnBackground: "info",
    btnColor: "light",
    spacing: "2",
    onCountChange: onCountChange,
    label: "Amount",
    labelIsBold: true,
    layout: "col",
    rounded: "md",
    id: "counter",
    size: "md",
    title: "Enter a value between 1 and 9",
    hint: true,
    inputStyles: "max-w-[3em] border-gray-200 dark:border-gray-700 border-2",
  },
};
