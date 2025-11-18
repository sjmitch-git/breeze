import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Ratings } from "..";

import { FaDiamond } from "react-icons/fa6";

const codeExample = `
<Ratings
  rating={3}
  range={5}
  icon="star"
  size="md"
  ratingsBackground="transparent"
  ratingsColor="accent"
/>
`;

const customIconExample = `
import { FaDiamond } from 'react-icons/fa6'

<Ratings
  rating={3}
  range={5}
  customIcon={<FaDiamond />}
  size="md"
  ratingsBackground="transparent"
  ratingsColor="accent"
/>
`;

const emojiIconExample = `
<Ratings
  rating={4}
  range={5}
  customIcon="🙂"
  size="md"
  ratingsColor="transparent"
/>
`;

const meta: Meta = {
  title: "Feedback/Ratings",
  component: Ratings,
  tags: ["autodocs"],
  parameters: {
    docs: {
      source: {
        code: codeExample,
      },
      description: {
        component: `
The **Ratings** component allows users to display a set of icons (such as stars) to indicate a rating level (e.g., 3 out of 5 stars).

### Import
\`\`\`tsx
import { Ratings } from '@smitch/breeze'
\`\`\`

### Example Usage:
\`\`\`tsx
// default icon (star)
${codeExample}
\`\`\`

\`\`\`tsx
// custom icon
${customIconExample}
\`\`\`

\`\`\`tsx
// using an emoji as the custom icon
${emojiIconExample}
\`\`\`

### Key Features:
- Customizable with different icons such as \`star\`, \`heart\`, \`thumb\`, and more.
- You can pass a custom icon using the \`customIcon\` prop.
- The component allows setting the total range of icons (e.g., 5 for a 5-star rating system) via the \`range\` prop.
- Easily change the appearance using props like \`size\`, \`color\`, and \`background\`.
`,
      },
    },
  },
} satisfies Meta<typeof Ratings>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  argTypes: {
    customIcon: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    icon: "star",
    rating: 3,
    range: 5,
    spacing: "0",
    shape: "square",
    size: "md",
    ratingsBackground: "transparent",
    ratingsColor: "accent",
  },
};

export const CustomIcon: Story = {
  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
    customIcon: {
      table: {
        disable: true,
      },
    },
    icon: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    customIcon: <FaDiamond />,
    ratingsBackground: "transparent",
    ratingsColor: "accent",
    rating: 3,
    range: 5,
    spacing: "0",
    shape: "square",
    size: "md",
    icon: null,
  },
  parameters: {
    docs: {
      description: {
        story:
          "This story demonstrates a custom icon (`FaDiamond`) used for the Ratings component.",
      },
    },
  },
};

export const EmojiCustomIcon: Story = {
  args: {
    ...CustomIcon.args,
    customIcon: "🙂",
    ratingsBackground: "transparent",
    ratingsColor: "accent",
  },
  argTypes: {
    customIcon: {
      table: {
        disable: false,
      },
      color: {
        table: {
          disable: false,
        },
      },
    },
  },
  parameters: {
    docs: {
      source: {
        code: emojiIconExample,
      },
      description: {
        story: "This story demonstrates a custom emoji icon 🙂 used for the Ratings component.",
      },
    },
  },
};
