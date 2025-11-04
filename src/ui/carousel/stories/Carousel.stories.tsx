import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Carousel } from "..";
import { Card, CardHeader, CardBody, CardFooter } from "../..";

import Data from "../../../data/dogs.json";

const meta: Meta = {
  title: "Menus/Carousel",
  component: Carousel,
  decorators: [
    (Story) => (
      <div className="max-w-2xl mx-auto">
        <Story />
      </div>
    ),
  ],
  args: {
    aspect: "landscape",
    outline: "thin",
    rounded: "none",
    caption: true,
    buttonsPosition: "middle",
    buttonLayout: "circle",
    buttonIcon: "chevron",
    buttonSize: "lg",
    buttonBackground: "dark",
    buttonColor: "light",
    buttonOutline: true,
    autoplay: false,
    autoplayDuration: 3000,
    className: "",
    data: Data,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    gallery: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
The **Carousel** component provides a flexible and visually appealing way to display a series of items, allowing for various layouts and configurations.

### Key Features:
- **Configurable Aspect Ratio:** Choose aspect ratios such as \`landscape\`, \`portrait\`, or \`circle\`.
- **Button Customization:** Position, shape, and styling options for navigation buttons.
- **Autoplay Control:** Enable autoplay with customizable duration.
- **Gallery Mode:** Activate gallery view for a visually rich, interactive display.

### Import:
\`\`\`jsx
import { Carousel } from '@smitch/fluid-ui';
\`\`\`

### Example Usage:
\`\`\`jsx
<Carousel
  aspect="landscape"
  buttonsPosition="middle"
  buttonLayout="circle"
  autoplay={false}
  data={Data}
/>
\`\`\`

This example shows a Carousel in landscape aspect, with circular middle-positioned buttons and disabled autoplay, using data from an imported JSON file.
`,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    gallery: true,
    autoplay: false,
    autoplayDuration: 3000,
  },
};

export const Autoplay: Story = {
  args: {
    gallery: true,
    autoplay: true,
    autoplayDuration: 3000,
    preloadImages: true,
  },
};

export const Custom: Story = {
  argTypes: {
    caption: {
      table: {
        disable: true,
      },
    },
    aspect: {
      table: {
        disable: true,
      },
    },
    preloadImages: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    gallery: false,
    autoplay: false,
    buttonsPosition: "middle",
    children: Data.map((item, _index) => (
      <Card
        key={item.name}
        className="aspect-[4/3] bg-white dark:bg-black"
        outline={false}
        rounded="none"
      >
        <CardBody>
          <CardHeader title={item.name} />
          <p className="line-clamp-5">{item.description}</p>
          <CardFooter link={item.link} linkLabel={item.name} />
        </CardBody>
      </Card>
    )),
  },
};
