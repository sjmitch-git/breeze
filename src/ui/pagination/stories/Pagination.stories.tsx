import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Pagination } from "..";
import { PaginationProps } from "../types";

const meta: Meta = {
  title: "Menus/Pagination",
  component: Pagination,
  tags: ["autodocs"],
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
The **Pagination** component allows users to navigate through paginated content in a user-friendly way. It includes multiple customization options to adapt the layout, style, and feedback to the needs of the UI, making it versatile for any interface requiring pagination.

### Key Features:
- **Layout Options:** Choose between \`horizontal\` and \`vertical\` to fit your design.
- **Customizable Buttons:** Adjust background, color, size, and rounded options for pagination buttons.
- **Feedback and Icons:** Enable feedback to display current page, with optional icons for next/previous navigation.
- **Results Range Control:** Easily set the total results and the number of items displayed per page.

### Import:
\`\`\`jsx
import { Pagination } from '@smitch/breeze';
\`\`\`

### Example Usage:
\`\`\`jsx
<Pagination
    layout="horizontal"
    size="md"
    btnBackground="info"
    btnColor="dark"
    results={69}
    range={6}
    feedback={true}
    feedbackLabel="Page:"
/>
\`\`\`
`,
      },
    },
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: PaginationProps) => {
    const [page, setPage] = useState("1");

    const handleChange = (page: string) => {
      setPage(page);
    };

    return <Pagination {...args} page={page} onChange={handleChange} />;
  },

  args: {
    layout: "horizontal",
    rounded: true,
    size: "lg",
    gap: "md",
    btnShape: "circle",
    btnBackground: "info",
    btnColor: "dark",
    results: 69,
    range: 6,
    icons: true,
    feedback: true,
    feedbackLabel: "Page:",
    minimal: false,
  },

  argTypes: {
    onChange: {
      table: {
        disable: true,
      },
    },
  },
};
