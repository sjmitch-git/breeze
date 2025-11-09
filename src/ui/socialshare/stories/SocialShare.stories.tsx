import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SocialShare } from "..";

const meta: Meta<typeof SocialShare> = {
  title: "Social/SocialShare",
  component: SocialShare,
  tags: ["autodocs"],
  args: {
    text: "Check out this awesome site!",
    buttons: [
      "X",
      "Facebook",
      "LinkedIn",
      "Slack",
      "WhatsApp",
      "Reddit",
      "Pinterest",
      "Telegram",
      "Bluesky",
      "Email",
    ],
    btnShape: "circle",
    size: "lg",
    gap: "sm",
    layout: "vertical",
    grayscale: false,
    className: "",
    style: {},
  },
  parameters: {
    docs: {
      description: {
        component: `
The **SocialShare** component displays a row or column of social sharing buttons.
You can control which buttons appear, their order, shape, and spacing.

### Import:
\`\`\`jsx
import { SocialShare } from '@smitch/breeze';
\`\`\`

### Example Usage:
\`\`\`jsx
<SocialShare
  text="Check out this awesome site!"
  buttons={['X', 'Facebook', 'LinkedIn', 'Slack', 'WhatsApp']}
  btnShape="circle"
  gap="md"
  layout="vertical"
/>
\`\`\`

#### Buttons Options:
- \`'X'\`
- \`'Facebook'\`
- \`'LinkedIn'\`
- \`'Slack'\`
- \`'WhatsApp'\`
- \`'Reddit'\`
- \`'Pinterest'\`
- \`'Telegram'\`
- \`'Email'\`
- \`'Bluesky'\`
`,
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof SocialShare>;

export const Default: Story = {};
