import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import TelegramButton from "../TelegramButton";

const meta: Meta<typeof TelegramButton> = {
  title: "Social/Buttons/Telegram",
  component: TelegramButton,
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
The **TelegramButton** component allows users to share the current page on Telegram.
It opens the Telegram share dialog with your custom text and the current page URL.

### Import:
\`\`\`jsx
import { SlackButton } from '@smitch/breeze';
\`\`\`

### Example Usage:
\`\`\`jsx
<TelegramButton
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
type Story = StoryObj<typeof TelegramButton>;

export const Default: Story = {};
