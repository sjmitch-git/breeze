import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { DataTable } from "..";

import data from "../../../data/carts.json";

const meta: Meta = {
  title: "Data Visualization/Data Table",
  component: DataTable,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
The **DataTable** component displays structured data in a table format, supporting features like sorting, column exclusion, and responsive design.

### Key Features:
- **Sorting**: Allows sorting of columns by clicking on their headers. The component toggles between ascending and descending order based on the previous state.
- **Column Ignoring**: Accepts an \`ignore\` prop to exclude specific columns from rendering, which is useful for hiding certain data fields.
- **Responsive Layout**: Adjusts layout for various screen sizes.
- **Customizable Table Dividers**: Optional \`dividersX\` and \`dividersY\` props add horizontal and vertical dividers, allowing for a clearer separation between rows and columns.
- **Sticky Header**: On mobile devices the header row stays fixed at the top when scrolling, making it easier to track data columns in large datasets.
- **Caption Support**: The \`caption\` prop provides a customizable title for the table, rendered above the table headers.
- **Custom Styling**: Accepts \`className\` for custom Tailwind CSS styling and a \`style\` prop for inline CSS styles, allowing greater flexibility in design.


### Import:
\`\`\`jsx
import { DataTable } from '@smitch/breeze'
\`\`\`

### Import Data:
\`\`\`jsx
import data from '@/data/carts.json' // modify path as required
\`\`\`

### Example Usage:
\`\`\`jsx
<DataTable
    data={data}
    caption='Shopping Cart'
    dividersX
    dividersY
/>
\`\`\`
`,
      },
    },
  },
} satisfies Meta<typeof DataTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: data,
    ignore: ["id"],
    caption: "Shopping Cart",
    dividersX: true,
    dividersY: true,
  },
  argTypes: {
    data: {
      table: {
        disable: true,
      },
    },
  },
};
