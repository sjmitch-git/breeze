import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import EmailButton from "../EmailButton";

const meta: Meta<typeof EmailButton> = {
  title: "Social/Buttons/Email",
  component: EmailButton,
  tags: ["autodocs"],
  args: {
    text: "Check out this awesome site!",
    btnShape: "circle",
    size: "lg",
  },
  parameters: {
    docs: {
      description: {
        component: `
The **EmailButton** component allows users to share content via email using a mailto link.
It uses the current page title as the subject and includes your custom text and the page URL in the email body.

### Import:
\`\`\`jsx
import { EmailButton } from '@smitch/breeze';
\`\`\`

### Example Usage:
\`\`\`jsx
<EmailButton
  text="Check out this awesome site!"
  btnShape="circle"
  size="lg"
/>
\`\`\`
`,
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof EmailButton>;

export const Default: Story = {};
