import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Blockquote } from "..";

const meta = {
  title: "Typography/Blockquote",
  component: Blockquote,
  decorators: [
    (Story) => (
      <div className=" max-w-2xl p-4 mx-auto">
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: `The **Blockquote** component is used to highlight text, typically quotations from people or important passages. It supports customization for font size, optional author attribution, and citation links. This component is fully responsive and adjusts seamlessly between light and dark modes.

### Key Features:
- **Customizable Size**: Adjust the font size of the blockquote for better readability.
- **Optional Author and Citation**: Display an author's name and a citation link in the footer.
- **Text Alignment**: Align the footer (author name) to the left or right.
- **Responsive Design**: Automatically adjusts styles for light and dark modes.

### Import:
\`\`\`tsx
import { Blockquote } from '@smitch/breeze'
\`\`\`

### Usage Example:
\`\`\`tsx
<Blockquote
  text="Nothing compares to the simple pleasure of riding a bike."
  author="John F. Kennedy"
  cite="https://www.famousquotes.com/quote-author/john-fitzgerald-kennedy/"
  footerAlign="right"
  size="lg"
/>
\`\`\`
`,
      },
    },
  },
  argTypes: {
    text: {
      control: "text",
      description: "The main text content of the blockquote.",
    },
    author: {
      control: "text",
      description: "Optional author name for attribution.",
    },
    cite: {
      control: "text",
      description: "Optional URL for the citation link.",
    },
    footerAlign: {
      control: "radio",
      options: ["left", "right"],
      description: "Alignment of the footer (author and citation).",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl", "xxl"],
      description: "Font size of the element.",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Blockquote>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Nothing compares to the simple pleasure of riding a bike.",
    author: "John F. Kennedy",
    cite: "https://www.famousquotes.com/quote-author/john-fitzgerald-kennedy/",
    footerAlign: "right",
    size: "md",
  },
};
