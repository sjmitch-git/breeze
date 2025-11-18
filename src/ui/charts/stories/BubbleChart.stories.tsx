import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { BubbleChart } from "..";

const meta: Meta = {
  title: "Data Visualization/Bubble Chart",
  component: BubbleChart,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
The **BubbleChart** component displays data points with varying sizes, making it ideal for visualizing datasets with three dimensions (x, y, and bubble size), such as demographic data or product metrics.

### Key Features:
- **Responsive Design**: Adjusts to fit different screen sizes.
- **Dynamic Bubble Sizes**: Allows variable sizes for each bubble, representing a third dimension.
- **Legend Positioning**: Customizable legend position with the \`legendposition\` prop.
- **Chart.js Options**: Additional customization via the \`options\` prop.
- **Title Customization**: Display a title with the \`title\` prop for context.


### Import:
\`\`\`jsx
import { BubbleChart } from '@smitch/breeze/charts'
\`\`\`

### Example Usage:
\`\`\`jsx
<BubbleChart
    data={{
        datasets: [
            {
                label: 'Product Popularity',
                data: [
                    { x: 10, y: 20, r: 15 },
                    { x: 15, y: 10, r: 10 },
                    { x: 25, y: 30, r: 20 },
                    { x: 30, y: 25, r: 12 },
                ],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
        ],
    }}
    title="Product Popularity by Region"
    legendposition="bottom"
	options: {
		scales: {
			y: {
				beginAtZero: true,
			},
		},
	},
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
} satisfies Meta<typeof BubbleChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Bubble Chart",
  args: {
    data: {
      datasets: [
        {
          label: "2019",
          data: [{ x: 2019, y: 50, r: 10 }],
          backgroundColor: "rgba(54, 162, 235, 0.5)",
          borderColor: "rgba(54, 162, 235, 1)",
        },
        {
          label: "2020",
          data: [{ x: 2020, y: 65, r: 12 }],
          backgroundColor: "rgba(75, 192, 192, 0.5)",
          borderColor: "rgba(75, 192, 192, 1)",
        },
        {
          label: "2021",
          data: [{ x: 2021, y: 80, r: 18 }],
          backgroundColor: "rgba(255, 99, 132, 0.5)",
          borderColor: "rgba(255, 99, 132, 1)",
        },
        {
          label: "2022",
          data: [{ x: 2022, y: 90, r: 22 }],
          backgroundColor: "rgba(255, 159, 64, 0.5)",
          borderColor: "rgba(255, 159, 64, 1)",
        },
      ],
    },
    title: "Startup Growth Over Time",
    titleColor: "#a7a7a7",
    titleFontSize: 18,
    legendposition: "bottom",
    legendColor: "#a7a7a7",
    legendFontSize: 15,
    gridColor: "#a7a7a7",
    aspect: "portrait",
    options: {
      scales: {
        x: {
          ticks: {
            stepSize: 1,
            callback: (value: string) => Number(value).toFixed(0),
          },
        },
        y: {
          beginAtZero: true,
        },
      },
      plugins: {
        tooltip: {
          callbacks: {
            title: (tooltipItems: { raw: { x: number } }[]) => {
              const year = tooltipItems[0].raw.x;
              return `${year}`;
            },
            label: (tooltipItem: { raw: { y: number; r: number } }) => {
              const value = tooltipItem.raw.y;
              const radius = tooltipItem.raw.r;
              return `Value: ${value}, Size: ${radius}`;
            },
          },
        },
      },
    },
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
