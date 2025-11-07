import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ScatterChart } from "..";

const meta: Meta = {
  title: "Data Visualization/Scatter Chart",
  component: ScatterChart,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
The **ScatterChart** component is ideal for displaying data with two quantitative dimensions (x and y), such as correlation or distribution of values.

### Key Features:
- **Responsive Design**: Adapts to different screen sizes.
- **Customizable Axes**: Allows fine-tuning for both x and y axes.
- **Legend Positioning**: Adjustable legend position using the \`legendposition\` prop.
- **Chart.js Options**: Extensive customization via the \`options\` prop.
- **Tooltip Customization**: Modify tooltip content for better context.

### Import:
\`\`\`jsx
import { ScatterChart } from '@smitch/fluid/charts';
\`\`\`

### Example Usage:
\`\`\`jsx
<ScatterChart
    data={{
        datasets: [
            {
                label: 'Dataset 1',
                data: [
                    { x: 10, y: 20 },
                    { x: 15, y: 10 },
                    { x: 25, y: 30 },
                    { x: 30, y: 25 },
                ],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
        ],
    }}
    title="Data Correlation"
    legendposition="top"
    options={{
        scales: {
            x: { beginAtZero: true },
            y: { beginAtZero: true },
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
} satisfies Meta<typeof ScatterChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Positive Correlation",
  args: {
    data: {
      datasets: [
        {
          label: "Height vs Weight",
          data: [
            { x: 160, y: 55 },
            { x: 170, y: 65 },
            { x: 180, y: 75 },
            { x: 175, y: 70 },
            { x: 165, y: 60 },
            { x: 185, y: 85 },
          ],
          backgroundColor: "rgba(54, 162, 235, 0.5)",
          borderColor: "rgba(54, 162, 235, 1)",
        },
        {
          label: "Trend",
          data: [
            { x: 160, y: 50 },
            { x: 185, y: 90 },
          ],
          backgroundColor: "rgba(255, 99, 132, 1)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
          showLine: true,
        },
      ],
    },
    title: "Height vs Weight Distribution",
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
          type: "linear",
          title: {
            display: true,
            text: "Height (cm)",
          },
        },
        y: {
          title: {
            display: true,
            text: "Weight (kg)",
          },
        },
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: (tooltipItem: { raw: { x: number; y: number } }) => {
              const xValue = tooltipItem.raw.x;
              const yValue = tooltipItem.raw.y;
              return `${xValue}cm ${yValue}kg`;
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

export const NegativeCorrelation: Story = {
  args: {
    data: {
      datasets: [
        {
          label: "Age / Price",
          data: [
            { x: 1, y: 30000 },
            { x: 2, y: 25000 },
            { x: 3, y: 22000 },
            { x: 5, y: 18000 },
            { x: 7, y: 14000 },
            { x: 10, y: 8000 },
            { x: 12, y: 5000 },
          ],
          backgroundColor: "rgba(255, 99, 132, 0.5)",
          borderColor: "rgba(255, 99, 132, 1)",
        },
        {
          label: "Trend",
          data: [
            { x: 1, y: 30000 },
            { x: 12, y: 5000 },
          ],
          backgroundColor: "rgba(75, 192, 192, 1)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
          showLine: true,
          pointRadius: [0, 0],
          pointStyle: "none",
        },
      ],
    },
    title: "Age of Car vs Price",
    titleColor: "#a7a7a7",
    titleFontSize: 18,
    legendposition: "bottom",
    gridColor: "#a7a7a7",
    options: {
      scales: {
        x: {
          type: "linear",
          title: {
            display: true,
            text: "Age of Car (years)",
          },
        },
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: "Price (£)",
          },
        },
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: (tooltipItem: { raw: { x: number; y: number } }) => {
              const yValue = tooltipItem.raw.y;
              const xValue = tooltipItem.raw.x;
              return `£${yValue} @ ${xValue} yrs`;
            },
          },
        },
      },
    },
  },
  argTypes: {
    ...Default.argTypes,
  },
};
