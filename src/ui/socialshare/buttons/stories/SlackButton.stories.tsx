import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import SlackButton from "../SlackButton";

const meta: Meta<typeof SlackButton> = {
  title: "Social/Buttons/Slack",
  component: SlackButton,
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
The **SlackButton** component allows users to share the current page on Slack.
It opens the Slack share dialog with your custom text and the current page URL.

### Import:
\`\`\`jsx
import { SlackButton } from '@smitch/breeze';
\`\`\`

### Example Usage:
\`\`\`jsx
<SlackButton
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
type Story = StoryObj<typeof SlackButton>;

export const Default: Story = {};
