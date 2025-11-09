import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Card, CardHeader, CardBody, CardImage, CardFooter } from "..";

import Data from "../../../data/dogs.json";

const meta: Meta = {
  title: "Media/Card",
  component: Card,
  decorators: [
    (Story) => (
      <div className="max-w-lg mx-auto p-4">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    layout: "col",
    shadow: "none",
    rounded: "none",
    outline: true,
    className: "",
  },
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
The **Card** component offers a flexible and composable structure for displaying content in a card layout. It includes sections like an image, header, body, and footer, making it versatile for various content types. The Card can also be customized with layout orientations, shadow, border outline, and rounded corners.

### Key Features:
- **Composable Structure:** Use \`CardImage\`, \`CardHeader\`, \`CardBody\`, and \`CardFooter\` to organize content within the Card.
- **Layout Variants:** Choose between \`col\`, \`row\`, and \`col_reverse\` for arranging content.
- **Shadow and Rounding Options:** Apply different shadow and rounding options for visual depth and style.
- **Outline Control:** Toggle the card's border outline for added contrast or minimalism.

### Import:
\`\`\`jsx
import { Card, CardHeader, CardBody, CardImage, CardFooter } from '@smitch/breeze';
\`\`\`

### Example Usage:
\`\`\`jsx
<Card layout="col" shadow="md" rounded="lg" outline>
  <CardImage
    title="Dog"
    src="https://example.com/dog.jpg"
    aspect="landscape"
  />
  <CardBody>
    <CardHeader title="Dog" />
    <p className="line-clamp-2">Description about the dog</p>
    <CardFooter link="https://example.com" linkLabel="Learn More" />
  </CardBody>
</Card>
\`\`\`

`,
      },
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

const data = Data[0];

export const Default: Story = {
  args: {
    children: (
      <>
        <CardImage title={data.name} src={data.src} aspect="landscape" />

        <CardBody>
          <CardHeader title={data.name} />
          <p className="line-clamp-2">{data.description}</p>
          <CardFooter link={data.link} linkLabel={data.name} />
        </CardBody>
      </>
    ),
  },
};

export const NoImage: Story = {
  argTypes: {
    layout: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    outline: true,
    children: (
      <>
        <CardBody>
          <CardHeader title={data.name} />
          <p className="line-clamp-2">{data.description}</p>
          <CardFooter link={data.link} linkLabel={data.name} />
        </CardBody>
      </>
    ),
  },
};

export const ImageSquareAspect: Story = {
  args: {
    children: (
      <>
        <CardImage title={data.name} src={data.src} aspect="square" />

        <CardBody>
          <CardHeader title={data.name} />
          <p className="line-clamp-2">{data.description}</p>
          <CardFooter link={data.link} linkLabel={data.name} />
        </CardBody>
      </>
    ),
  },
};

export const ImageVideoAspect: Story = {
  args: {
    children: (
      <>
        <CardImage title={data.name} src={data.src} aspect="video" />

        <CardBody>
          <CardHeader title={data.name} />
          <p className="line-clamp-2">{data.description}</p>
          <CardFooter link={data.link} linkLabel={data.name} />
        </CardBody>
      </>
    ),
  },
};

export const ImagePortraitAspect: Story = {
  args: {
    children: (
      <>
        <CardImage title={data.name} src={data.src} aspect="portrait" />

        <CardBody>
          <CardHeader title={data.name} />
          <p className="line-clamp-2">{data.description}</p>
          <CardFooter link={data.link} linkLabel={data.name} />
        </CardBody>
      </>
    ),
  },
};
