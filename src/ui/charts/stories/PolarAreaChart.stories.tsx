import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PolarAreaChart } from "..";

const meta: Meta<typeof PolarAreaChart> = {
  title: "Data Visualization/Polar Area Chart",
  component: PolarAreaChart,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
The **PolarAreaChart** component displays data in a circular format, where each segment represents a proportionate value. Ideal for visualizing categorical data where the focus is on showing the relative size of each category.

### Key Features:
- **Responsive Design**: Fits different screen sizes and maintains aspect ratio.
- **Customizable Legend Position**: Adjust the legend position with the \`legendposition\` prop.
- **Chart.js Options**: Customize further with the \`options\` prop.
- **Title Support**: Display context with the \`title\` prop.

### Import:
\`\`\`jsx
import { PolarAreaChart } from '@smitch/breeze/charts'
\`\`\`

### Example Usage:
\`\`\`jsx
<PolarAreaChart
    data={{
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: 'Category Breakdown',
                data: [11, 16, 7, 3, 14, 9],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    }}
    title="Category Breakdown"
    legendposition="bottom"
    options={{
        scales: {
            r: {
                beginAtZero: true,
            },
        },
    }}
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
};

export default meta;
type Story = StoryObj<typeof PolarAreaChart>;

export const Default: Story = {
  name: "Polar Area Chart",
  args: {
    data: {
      labels: ["Electronics", "Furniture", "Clothing", "Groceries", "Books"],
      datasets: [
        {
          label: "Sales Distribution",
          data: [300, 200, 150, 400, 100],
          backgroundColor: [
            "rgba(54, 162, 235, 0.6)", // Electronics
            "rgba(255, 99, 132, 0.6)", // Furniture
            "rgba(75, 192, 192, 0.6)", // Clothing
            "rgba(255, 206, 86, 0.6)", // Groceries
            "rgba(153, 102, 255, 0.6)", // Books
          ],
          borderWidth: 1,
        },
      ],
    },
    title: "Sales Distribution by Product Category",
    titleColor: "#a7a7a7",
    titleFontSize: 16,
    legendposition: "bottom",
    legendColor: "#a7a7a7",
    legendFontSize: 15,
    aspect: "portrait",
    gridColor: "#a7a7a7",
    options: {
      scales: {
        r: {
          grid: {
            color: "#a7a7a7",
          },
          ticks: {
            display: true,
            backdropColor: "transparent",
          },
        },
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: (tooltipItem: { raw: any }) => {
              return `Sales: $${tooltipItem.raw}`;
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

export const PolarAreaLandscape: Story = {
  args: {
    ...Default.args,
    legendposition: "left",
    aspect: "landscape",
  },
  argTypes: {
    ...Default.argTypes,
    legendposition: {
      options: ["left", "right"],
    },
  },
};
