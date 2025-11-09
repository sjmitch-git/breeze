import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import RedditButton from "../RedditButton";

const meta: Meta<typeof RedditButton> = {
  title: "Social/Buttons/Reddit",
  component: RedditButton,
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
The **RedditButton** component allows users to share the current page on Reddit.
It opens the Reddit share dialog with your custom title and the current page URL.

### Import:
\`\`\`jsx
import { PinterestButton } from '@smitch/breeze';
\`\`\`

### Example Usage:
\`\`\`jsx
<RedditButton
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
type Story = StoryObj<typeof RedditButton>;

export const Default: Story = {};
