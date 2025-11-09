import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Gallery } from "..";

import Data from "../../../data/dogs.json";

const meta: Meta = {
  title: "Media/Gallery",
  component: Gallery,
  decorators: [
    (Story) => (
      <div className="p-0">
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: `
The **Gallery** component displays a collection of media items in a flexible layout. It provides customizable options like aspect ratio, captions, and styling to accommodate various media presentation needs.

### Key Features:
- **Flexible Aspect Ratios:** Customize the display of each media item by choosing from landscape, portrait, square, video, circle, or phone aspect ratios.
- **Optional Captions:** Add captions below each item for additional context or descriptions.
- **Custom Styling:** Apply custom classes and inline styles to adjust the component's appearance.

### Import:
\`\`\`jsx
import { Gallery } from '@smitch/breeze';
\`\`\`

### Example Usage:
\`\`\`jsx
import Data from '@/data/dogs.json';

<Gallery
  data={Data}
  aspect="landscape"
  caption={true}
/>
\`\`\`

In this example, the Gallery component uses an imported dataset of dog images and displays each item with a landscape aspect ratio, enabling captions below each image.
`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    style: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Gallery>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: Data,
    aspect: "landscape",
    caption: true,
    className: "",
  },
};
