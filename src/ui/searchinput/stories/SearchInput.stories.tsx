import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SearchInput } from "..";

const meta: Meta = {
  title: "Inputs/Search Input",
  component: SearchInput,
  decorators: [
    (Story) => (
      <div className="p-4">
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: `
The **SearchInput** component is a versatile input field designed for search functionalities. It includes an optional submit button and customization options for various UI needs.

### Key Features:
- **Customizable Button**: Adjust shape, color, and background for the submit button.
- **Responsive Sizes**: Available in multiple sizes (\`sm\`, \`md\`, \`lg\`, \`xl\`).
- **Accessibility Options**: Includes \`autocomplete\`, \`spellcheck\`, and \`autocorrect\` for improved usability.
- **Icon Integration**: Option to include an icon for better user experience.

### Import:
\`\`\`jsx
import { SearchInput } from '@smitch/breeze';
\`\`\`

### Example Usage:
\`\`\`jsx
<SearchInput
    label="Search"
    placeholder="Type to search..."
    onButtonSubmit={(value) => console.log('Search submitted:', value)}
/>
\`\`\`
        `,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SearchInput>;

export default meta;
type Story = StoryObj<typeof meta>;

const onButtonSubmit = (value: string) => {
  console.log("onButtonSubmit", value);
};

export const Default: Story = {
  argTypes: {
    value: {
      table: {
        disable: true,
      },
    },
    name: {
      table: {
        disable: true,
      },
    },
    id: {
      table: {
        disable: true,
      },
    },
    onButtonSubmit: {
      table: {
        disable: true,
      },
    },
    autocomplete: {
      options: ["on", "off"],
    },
  },
  args: {
    onButtonSubmit: onButtonSubmit,
    label: "Search",
    icon: true,
    size: "lg",
    inputStyles: "border-neutral",
    btnShape: "default",
    btnBackground: "primary",
    btnColor: "current",
    autocomplete: "on",
    placeholder: "Search...",
    autocorrect: "on",
    spellcheck: "on",
    spacing: "2",
    rounded: "none",
  },
};
