import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import LinkedInButton from "../LinkedinButton";

const meta: Meta<typeof LinkedInButton> = {
  title: "Social/Buttons/LinkedIn",
  component: LinkedInButton,
  tags: ["autodocs"],
  args: {
    btnShape: "circle",
    size: "lg",
  },
  parameters: {
    docs: {
      description: {
        component: `
The **LinkedInButton** component allows users to share the current page on LinkedIn.
It opens the LinkedIn share dialog with the current page URL.

### Import:
\`\`\`jsx
import { LinkedInButton } from '@smitch/breeze';
\`\`\`

### Example Usage:
\`\`\`jsx
<LinkedInButton
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
type Story = StoryObj<typeof LinkedInButton>;

export const Default: Story = {};
