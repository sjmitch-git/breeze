import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { TextArea } from "..";

const meta = {
  title: "Inputs/Textarea",
  component: TextArea,
  decorators: [
    (Story) => (
      <div className=" max-w-2xl p-4 mx-auto">
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: `
The **TextArea** component provides a multi-line input field for users to enter large amounts of text. It is versatile and can be customized in terms of size, layout, and behavior to fit various form and UI needs.

### Key Features:
- **Resizable Option**: Allows for optional resizing to enhance user experience.
- **Customizable Size and Rows**: Specify the number of visible rows and adjust the overall size with ease.
- **Label Support**: Includes an optional label to indicate the purpose of the input.
- **Accessibility Options**: Supports \`placeholder\`, \`required\`, and \`maxLength\` attributes for better form control.
- **Flexible Layouts**: Configure the layout to be in column or row format for optimal UI organization.

### Import:
\`\`\`jsx
import { TextArea } from '@smitch/breeze';
\`\`\`

### Example Usage:
\`\`\`jsx
<TextArea
    label="Comments"
    placeholder="Write your feedback here..."
    rows={4}
    resize={true}
    maxLength={200}
    required={false}
    layout="col"
    size="md"
/>
\`\`\`

### Accessibility and Best Practices:
- Use \`placeholder\` to guide users on the expected content.
- Consider setting \`maxLength\` to limit input size when necessary.
- Use the \`label\` property for better accessibility and to indicate the field’s purpose clearly.
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
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Some placeholder text",
    resize: true,
    maxLength: 200,
    rows: 4,
    label: "Comments",
    required: false,
    layout: "col",
    size: "md",
  },
};
