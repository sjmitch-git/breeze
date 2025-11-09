import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Checkbox } from "..";

const meta: Meta = {
  title: "Inputs/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="max-w-2xl mx-auto p-4">
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: `
The **Checkbox** component allows users to toggle selections on and off, making it ideal for forms, settings, and preference controls. This component provides options for size, rounded corners, and bold labels to improve usability and flexibility within a variety of UI designs.

### Key Features:
- **Customizable Sizes**: Available in \`md\`, \`lg\`, and \`xl\` to match UI needs.
- **Rounded Corners**: Optionally apply rounded corners for a softer look.
- **Hint Text**: Add additional descriptive text below the checkbox for context.
- **Event Handling**: Supports custom \`onChange\` events for responsive feedback.

### Import:
\`\`\`jsx
import { Checkbox } from '@smitch/breeze';
\`\`\`

### Example Usage:
\`\`\`jsx
<Checkbox
    label="I accept"
    name="terms"
    hint="I agree to the terms and conditions"
    required={false}
    size="md"
    labelIsBold={true}
/>
\`\`\`
`,
      },
    },
  },
  argTypes: {
    name: {
      table: {
        disable: true,
      },
    },
    onChange: {
      action: "changed",
      description: "Triggered when the checkbox is checked or unchecked",
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Checkbox",
  args: {
    label: "I accept",
    name: "terms",
    hint: "I agree to the terms and conditions",
    required: false,
    size: "md",
    labelIsBold: true,
    rounded: "none",
  },
  parameters: {
    actions: {
      argTypesRegex: "^on.*",
    },
  },
};
