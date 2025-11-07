import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { MixedChart } from "..";

const meta: Meta = {
  title: "Data Visualization/Mixed Chart",
  component: MixedChart,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
The **MixedChart** component is ideal for displaying two or more different chart types. A common example is a bar chart that also includes a line dataset.

### Key Features:
- **Responsive Design**: Adapts to different screen sizes.
- **Legend Positioning**: Adjustable legend position using the \`legendposition\` prop.
- **Chart.js Options**: Extensive customization via the \`options\` prop.

### Import:
\`\`\`jsx
import { MixedChart } from '@smitch/fluid/charts';
\`\`\`

### Example Usage:
\`\`\`jsx
<MixedChart
  data={{
    datasets: [
      {
        backgroundColor: 'red',
        borderColor: 'red',
        data: [35, 15, 18, 38, 45, 35, 27, 65],
        label: 'Expected Sales',
        lineTension: 0.2,
        type: 'line'
      },
      {
        backgroundColor: 'purple',
        borderColor: 'purple',
        data: [20, 8, 12, 29, 35, 30, 20, 50],
        label: 'Profit',
        lineTension: 0.2,
        type: 'line'
      },
      {
        backgroundColor: '#ccc',
        data: [60, 30, 20, 45, 50, 40, 35, 77],
        label: 'Monthly Sales',
        type: 'bar'
      }
    ],
    labels: ['January','February','March','April','May','June','July','August']
  }}
  legendposition="bottom"
  title="Monthly Sales Data (GBP)"
/>
\`\`\`
`,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="max-w-sm mx-auto">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof MixedChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Mixed Chart",
  args: {
    data: {
      datasets: [
        {
          label: "Expected Sales",
          data: [35, 15, 18, 38, 45, 35, 27, 65],
          type: "line",
          borderColor: "red",
          backgroundColor: "red",
          lineTension: 0.2,
        },
        {
          type: "line",
          data: [20, 8, 12, 29, 35, 30, 20, 50],
          label: "Profit",
          borderColor: "purple",
          backgroundColor: "purple",
          lineTension: 0.2,
        },
        {
          label: "Monthly Sales",
          data: [60, 30, 20, 45, 50, 40, 35, 77],
          type: "bar",
          backgroundColor: "#cccccc",
        },
      ],
      labels: ["January", "February", "March", "April", "May", "June", "July", "August"],
    },
    title: "Monthly Sales Data (GBP)",
    titleColor: "#a7a7a7",
    titleFontSize: 18,
    legendposition: "bottom",
    legendColor: "#a7a7a7",
    legendFontSize: 15,
    gridColor: "#a7a7a7",
    aspect: "portrait",
  },
  argTypes: {
    data: {
      table: {
        disable: true,
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
    style: {
      table: {
        disable: true,
      },
    },
    options: {
      table: {
        disable: true,
      },
    },
    aspect: {
      table: {
        disable: true,
      },
    },
    legendposition: {
      options: ["top", "bottom"],
    },
  },
};
