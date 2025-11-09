import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import FacebookButton from "../FacebookButton";

const meta: Meta<typeof FacebookButton> = {
  title: "Social/Buttons/Facebook",
  component: FacebookButton,
  tags: ["autodocs"],
  args: {
    btnShape: "circle",
    size: "lg",
  },
  parameters: {
    docs: {
      description: {
        component: `
The **FacebookButton** component allows users to share the current page on Facebook.
It opens the Facebook share dialog with the current page URL.

### Import:
\`\`\`jsx
import { FacebookButton } from '@smitch/breeze';
\`\`\`

### Example Usage:
\`\`\`jsx
<FacebookButton
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
type Story = StoryObj<typeof FacebookButton>;

export const Default: Story = {};
