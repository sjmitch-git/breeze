import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import BlueskyButton from "../BlueskyButton";

const meta: Meta<typeof BlueskyButton> = {
  title: "Social/Buttons/Bluesky",
  component: BlueskyButton,
  args: {
    text: "Check out this awesome site!",
    btnShape: "circle",
    size: "lg",
  },
  parameters: {
    docs: {
      description: {
        component: `
The **BlueskyButton** component allows users to share the current page on Bluesky.
It opens the Bluesky compose dialog with your custom text and the current page URL.

### Import:
\`\`\`jsx
import { BlueskyButton } from '@smitch/breeze';
\`\`\`

### Example Usage:
\`\`\`jsx
<BlueskyButton
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
type Story = StoryObj<typeof BlueskyButton>;

export const Default: Story = {};
