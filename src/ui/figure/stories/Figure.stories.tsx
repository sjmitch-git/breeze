import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Figure } from "..";

const meta: Meta = {
  title: "Media/Figure",
  component: Figure,
  decorators: [
    (Story) => (
      <div className="max-w-lg mx-auto p-4">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
    backdrop: {
      table: {
        disable: true,
      },
    },
  },
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
The **Figure** component displays a single media item with a caption, customizable aspect ratio, and an optional modal view. When the user clicks the image, it opens in a modal with a specified backdrop, enhancing focus on the media.

### Key Features:
- **Flexible Aspect Ratios:** Choose from landscape, portrait, square, video, circle, phone, and ultrawide aspect ratios for optimal display.
- **Image Modal on Click:** Clicking the image opens it in a modal, with the option to close by clicking the modal backdrop.
- **Customizable Backdrop:** The modal can be set with a light or dark backdrop for contrast.
- **Caption Support:** Display captions for media context.

### Import:
\`\`\`jsx
import { Figure } from '@smitch/breeze';
\`\`\`

### Example Usage:
\`\`\`jsx
<Figure
  src="https://st3.depositphotos.com/1752368/13759/i/450/depositphotos_137595842-stock-photo-three-budgies-are-in-the.jpg"
  alt="Budgies"
  caption="Budgies"
  aspect="landscape"
  backdrop="dark"
/>
\`\`\`

In this example, the **Figure** component displays an image of budgies with a landscape aspect ratio and a dark backdrop for the modal. The image opens in a modal when clicked, making it ideal for media galleries or product showcases.
`,
      },
    },
  },
} satisfies Meta<typeof Figure>;

export default meta;
type Story = StoryObj<typeof meta>;

const src =
  "https://st3.depositphotos.com/1752368/13759/i/450/depositphotos_137595842-stock-photo-three-budgies-are-in-the.jpg";
const title = "Budgies";

export const Default: Story = {
  args: {
    src: src,
    alt: title,
    caption: title,
    aspect: "landscape",
    backdrop: "dark",
  },
};
