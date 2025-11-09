import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import PinterestButton from "../PinterestButton";

const meta: Meta<typeof PinterestButton> = {
  title: "Social/Buttons/Pinterest",
  component: PinterestButton,
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
The **PinterestButton** component allows users to share the current page on Pinterest.
It opens the Pinterest share dialog with your custom description and the current page URL.

### Import:
\`\`\`jsx
import { PinterestButton } from '@smitch/breeze';
\`\`\`

### Example Usage:
\`\`\`jsx
<PinterestButton
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
type Story = StoryObj<typeof PinterestButton>;

export const Default: Story = {};
