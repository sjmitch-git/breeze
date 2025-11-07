import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { RadarChart } from "..";
import { TooltipItem } from "chart.js";

const meta: Meta<typeof RadarChart> = {
  title: "Data Visualization/Radar Chart",
  component: RadarChart,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
The **RadarChart** component is ideal for displaying multivariate data, such as performance metrics across different categories. It plots data points for each category and connects them, making it easy to compare values across multiple datasets.

### Key Features:
- **Customizable Legend Position**: Allows for control over legend placement.
- **Scalable Options**: Supports configuration of scales, gridlines, and more via \`options\` prop.
- **Title Customization**: Display a title with the \`title\` prop for additional context.

### Import:
\`\`\`jsx
import { RadarChart } from '@smitch/fluid/charts';
\`\`\`

### Example Usage:
\`\`\`jsx
<RadarChart
    data={{
        labels: ['Speed', 'Strength', 'Agility', 'Endurance', 'Skill'],
        datasets: [
            {
                label: 'Athlete A',
                data: [65, 75, 70, 80, 60],
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
            },
            {
                label: 'Athlete B',
                data: [50, 60, 80, 70, 75],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
            },
        ],
    }}
    title="Athlete Performance Comparison"
    legendposition="bottom"
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
type Story = StoryObj<typeof RadarChart>;

export const Default: Story = {
  name: "Radar Chart",
  args: {
    data: {
      labels: ["Speed", "Strength", "Agility", "Endurance", "Skill"],
      datasets: [
        {
          label: "Athlete A",
          data: [65, 75, 70, 80, 60],
          backgroundColor: "rgba(54, 162, 235, 0.5)",
          borderColor: "rgba(54, 162, 235, 1)",
        },
        {
          label: "Athlete B",
          data: [50, 60, 80, 70, 75],
          backgroundColor: "rgba(255, 99, 132, 0.5)",
          borderColor: "rgba(255, 99, 132, 1)",
        },
      ],
    },
    title: "Athlete Performance Comparison",
    titleColor: "#a7a7a7",
    titleFontSize: 18,
    legendposition: "bottom",
    legendColor: "#a7a7a7",
    legendFontSize: 15,
    gridColor: "#a7a7a7",
    aspect: "square",
    options: {
      scales: {
        r: {
          beginAtZero: true,
        },
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: (tooltipItem: TooltipItem<"radar">) => {
              return `Score: ${tooltipItem.raw}`;
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
