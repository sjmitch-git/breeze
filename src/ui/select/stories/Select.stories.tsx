import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Select } from "..";

const options = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option 2" },
  { value: "3", label: "Option 3" },
];

const stringOptions = ["01", "02", "03", "04", "05"];

const numberOptions = [1, 2, 3, 4, 5];

const months = [
  { value: "01", label: "January" },
  { value: "02", label: "February" },
  { value: "03", label: "March" },
  { value: "04", label: "April" },
  { value: "05", label: "May" },
  { value: "06", label: "June" },
  { value: "07", label: "July" },
  { value: "08", label: "August" },
  { value: "09", label: "September" },
  { value: "10", label: "October" },
  { value: "11", label: "November" },
  { value: "12", label: "December" },
];

const meta: Meta = {
  title: "Inputs/Select",
  component: Select,
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
The **Select** component provides a dropdown menu for choosing from a list of options. It supports customization in appearance and size, making it a versatile choice for various input needs.

### Key Features:
- **Flexible Options**: Accepts arrays of strings, numbers, or objects with \`value\` and \`label\` properties.
- **Customizable Appearance**: Adjust size, border styles, and caret visibility.
- **Accessibility Options**: Includes support for \`placeholder\`, \`required\`, and more.

### Import:
\`\`\`jsx
import { Select } from '@smitch/breeze';
\`\`\`

### Example Usage:
\`\`\`jsx
<Select
    placeholder="Select an option"
    options={months}
    name="monthSelector"
    dropdownSize="md"
    onChange={(e) => console.log('Selected value:', e.target.value)}
/>
\`\`\`
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    onChange: {
      table: {
        disable: true,
      },
    },
    name: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Object: Story = {
  args: {
    placeholder: "Select Month",
    options: months,
    name: "months",
    dropdownSize: "md",
    required: true,
    rounded: "md",
    nocaret: false,
  },
};

export const Numbers: Story = {
  args: {
    options: numberOptions,
    name: "numbers",
    dropdownSize: "md",
    required: true,
    defaultValue: 1,
    rounded: "md",
    nocaret: true,
  },
};
