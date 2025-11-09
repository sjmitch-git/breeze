import React from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { RangeInput } from "..";
import { RangeInputProps } from "../types";

const meta = {
  title: "Inputs/Range Input",
  component: RangeInput,
  decorators: [
    (Story) => (
      <div className="max-w-sm p-2 mx-auto">
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: `
The **RangeInput** component is a slider-style input that lets users select a value within a defined range. It offers customization options such as labels, colors, and step increments, making it suitable for a variety of interactive interfaces.

### Key Features:
- **Customizable Appearance**: Control the active range color, background color, and thumbnail color/shape.
- **Labels and Layouts**: Flexible label display with bold and regular options, arranged in columns or rows.
- **Accessibility and Hints**: Includes hints, \`aria\` properties, and titles for better accessibility.
- **Responsive Design**: Adjustable size and layout for seamless integration into different UI designs.

### Import:
\`\`\`jsx
import { RangeInput } from '@smitch/breeze';
\`\`\`

### Example Usage:
\`\`\`jsx
<RangeInput
    label="Volume"
    min={0}
    max={100}
    step="5"
    defaultValue={50}
    rangeActive="#ff5733"
    rangeBackground="#ccc"
    onChange={(value) => console.log('Selected value:', value)}
/>
\`\`\`
`,
      },
    },
  },
  argTypes: {
    layout: {
      options: ["col", "row"],
      control: { type: "radio" },
    },
    required: {
      options: [false, true],
      control: { type: "radio" },
    },
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
    rangeActive: {
      control: { type: "color" },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RangeInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = (args: RangeInputProps) => {
  const handleChange = (value: number) => {
    console.log("Range Input value: ", value);
  };

  return <RangeInput {...args} onChange={handleChange} />;
};

Default.args = {
  label: "Range",
  labelIsBold: true,
  layout: "col",
  size: "md",
  min: 0,
  max: 20,
  step: "1",
  defaultValue: 0,
  rangeActive: "#ffa500",
  rangeBackground: "#cccccc",
  thumbnailColor: "#ffa500",
  thumbnailShape: "circle",
  rounded: true,
  title: "Current value:",
  hint: true,
  required: false,
};
