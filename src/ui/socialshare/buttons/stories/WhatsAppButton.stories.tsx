import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import WhatsAppButton from "../WhatsappButton";

const meta: Meta<typeof WhatsAppButton> = {
  title: "Social/Buttons/WhatsApp",
  component: WhatsAppButton,
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
The **WhatsAppButton** component allows users to share the current page on WhatsApp.
It opens the WhatsApp share dialog with your custom text and the current page URL.

### Import:
\`\`\`jsx
import { WhatsAppButton } from '@smitch/breeze';
\`\`\`

### Example Usage:
\`\`\`jsx
<WhatsAppButton
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
type Story = StoryObj<typeof WhatsAppButton>;

export const Default: Story = {};
