import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import XButton from "../XButton";

const meta: Meta<typeof XButton> = {
  title: "Social/Buttons/XButton",
  component: XButton,
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
The **XButton** component allows users to share the current page on X (formerly Twitter).
It opens the X share dialog with your custom text and the current page URL.

### Import:
\`\`\`jsx
import { XButton } from '@smitch/breeze';
\`\`\`

### Example Usage:
\`\`\`jsx
<XButton
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
type Story = StoryObj<typeof XButton>;

export const Default: Story = {};
