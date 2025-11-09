import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PasswordInput } from "..";

const passwordPattern = "^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{12,16}$";

const meta: Meta = {
  title: "Inputs/Password Input",
  component: PasswordInput,
  decorators: [
    (Story) => (
      <div className="max-w-lg mx-auto p-4">
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: `
The **PasswordInput** component provides a user-friendly input field specifically designed for password entries. It includes a visibility toggle to switch between masked and plain text input for enhanced usability.

### Key Features:
- **Visibility Toggle**: Switch between password masking and plain text for easy viewing.
- **Custom Styling**: Customize with \`rounded\`, \`size\`, and \`inputStyles\` props.
- **Validation**: Option to include \`pattern\` for enforcing password rules. Use \`^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{12,16}$\` to align with Google strong passwords.
- **Accessibility**: \`aria-label\`, \`title\`, and \`hint\` for better accessibility.
- **Responsive Design**: Supports column or row layouts for flexible form designs.

### Import:
\`\`\`jsx
import { PasswordInput } from '@smitch/breeze';
\`\`\`

### Example Usage:
\`\`\`jsx
<PasswordInput
    label="Password"
    placeholder="Enter your password"
    pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{12,16}$"
    title="Password must be 12–16 characters, including at least one digit, one uppercase letter, one lowercase letter, and one special character (!@#$%^&*)."
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
    onInputChange: {
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
} satisfies Meta<typeof PasswordInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Password",
    layout: "col",
    size: "md",
    autocomplete: "current-password",
    placeholder: "Enter your password",
    hint: true,
    pattern: passwordPattern,
    title:
      "Password must be 12–16 characters, including at least one digit, one uppercase letter, one lowercase letter, and one special character (!@#$%^&*).",
    required: true,
    rounded: "md",
  },
};
