import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { BarChart } from "..";

const meta: Meta = {
  title: "Data Visualization/Bar Chart",
  component: BarChart,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
The **BarChart** component renders clear and responsive bar charts for visualizing data such as temperature ranges, sales data, or other categorical data points.

### Key Features:
- **Responsive Design**: Automatically adjusts size and layout to fit different screen sizes, ensuring accessibility across devices.
- **Legend Positioning**: The position of the chart\’s legend can be specified with the \`legendposition\` prop.
- **Chart.js Configuration**: Accepts additional Chart.js options via the \`options\` prop, allowing further customization of appearance and behavior.
- **Title Customization**: Optionally display a title with the \`title\` prop, making it easy to label data context.


### Import:
\`\`\`jsx
import { BarChart } from '@smitch/breeze/charts'
\`\`\`

### Example Usage:
\`\`\`jsx
<BarChart
    data={{
        datasets: [
            {
                label: 'Min Temperature (°C)',
                data: [12, 15, 10, 8, 14],
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderWidth: 0,
            },
            {
                label: 'Max Temperature (°C)',
                data: [22, 25, 20, 18, 24],
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
                borderWidth: 0,
            },
        ],
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    }}
	title = 'Weekly Temperature Ranges',
	legendposition = 'bottom',
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
} satisfies Meta<typeof BarChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Vertical Bars",
  args: {
    data: {
      labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      datasets: [
        {
          label: "Min (°C)",
          data: [12, 15, 10, 8, 14],
          backgroundColor: "rgba(54, 162, 235, 0.6)",
          borderWidth: 0,
        },
        {
          label: "Max (°C)",
          data: [22, 25, 20, 18, 24],
          backgroundColor: "rgba(255, 99, 132, 0.6)",
          borderWidth: 0,
        },
      ],
    },
    title: "Weekly Temperature Ranges",
    titleColor: "#a7a7a7",
    titleFontSize: 18,
    legendposition: "bottom",
    legendColor: "#a7a7a7",
    legendFontSize: 16,
    layout: "vertical",
    gridColor: "#a7a7a7",
    aspect: "portrait",
  },
  argTypes: {
    data: {
      table: {
        disable: true,
      },
    },
    options: {
      table: {
        disable: true,
      },
    },
    layout: {
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
  },
};

export const HorizontalBars: Story = {
  args: {
    data: {
      labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      datasets: [
        {
          label: "Min (°C)",
          data: [12, 15, 10, 8, 14],
          backgroundColor: "rgba(54, 162, 235, 0.6)",
          borderWidth: 0,
        },
        {
          label: "Max (°C)",
          data: [22, 25, 20, 18, 24],
          backgroundColor: "rgba(255, 99, 132, 0.6)",
          borderWidth: 0,
        },
      ],
    },
    title: "Weekly Temperature Ranges",
    titleColor: "#a7a7a7",
    titleFontSize: 18,
    legendposition: "bottom",
    legendColor: "#a7a7a7",
    legendFontSize: 16,
    layout: "horizontal",
    gridColor: "#a7a7a7",
    aspect: "portrait",
  },
  argTypes: {
    ...Default.argTypes,
  },
};

export const StackedCompound: Story = {
  args: {
    data: {
      labels: ["John", "Emily", "Alex"],
      datasets: [
        {
          label: "Maths",
          data: [85, 78, 92],
          backgroundColor: "rgba(54, 162, 235, 0.6)",
          borderWidth: 1,
        },
        {
          label: "Science",
          data: [75, 88, 80],
          backgroundColor: "rgba(255, 99, 132, 0.6)",
          borderWidth: 1,
        },
        {
          label: "English",
          data: [82, 90, 85],
          backgroundColor: "rgba(75, 192, 192, 0.6)",
          borderWidth: 1,
        },
      ],
    },
    title: "Test Scores",
    titleColor: "#a7a7a7",
    titleFontSize: 18,
    legendposition: "bottom",
    legendColor: "#a7a7a7",
    legendFontSize: 16,
    gridColor: "#a7a7a7",
    aspect: "portrait",
    layout: "vertical",
    options: {
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true,
          beginAtZero: true,
        },
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: (tooltipItem: { raw: number; dataset: any }) => {
              return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
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
  },
};

export const FloatingBars: Story = {
  args: {
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May"],
      datasets: [
        {
          label: "Temperature Range (°C)",
          data: [
            { x: "Jan", y: [5, 15] },
            { x: "Feb", y: [8, 18] },
            { x: "Mar", y: [10, 20] },
            { x: "Apr", y: [7, 17] },
            { x: "May", y: [12, 22] },
          ],
          backgroundColor: "rgba(153, 102, 255, 0.6)",
          borderColor: "rgba(153, 102, 255, 1)",
          borderWidth: 1,
        },
      ],
    },
    title: "Monthly Temperature Ranges",
    titleColor: "#a7a7a7",
    titleFontSize: 18,
    legendposition: "bottom",
    layout: "vertical",
    gridColor: "#a7a7a7",
    aspect: "square",
    options: {
      scales: {
        x: {
          beginAtZero: true,
        },
        y: {
          type: "linear",
          min: 0,
          max: 25,
          ticks: {
            stepSize: 5,
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          callbacks: {
            label: function (tooltipItem: { raw: any }) {
              const dataPoint = tooltipItem.raw;
              return `${dataPoint.y[0]}°C to ${dataPoint.y[1]}°C`;
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
    options: {
      table: {
        disable: true,
      },
    },
    layout: {
      table: {
        disable: true,
      },
    },
    legendposition: {
      table: {
        disable: true,
      },
    },
    legendcolor: {
      table: {
        disable: true,
      },
    },
    legendfontsize: {
      table: {
        disable: true,
      },
    },
    aspect: {
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
    legendColor: {
      table: {
        disable: true,
      },
    },
    legendFontSize: {
      table: {
        disable: true,
      },
    },
  },
};

export const PercentageBar: Story = {
  args: {
    data: {
      labels: ["England", "Rep. Ireland"],
      datasets: [
        {
          label: "England",
          data: [73.7],
          backgroundColor: "rgba(255, 219, 40, 1)",
          borderWidth: 1,
          barThickness: 30,
        },
        {
          label: "Rep. Ireland",
          data: [26.3],
          backgroundColor: "rgba(20, 20, 20, 1)",
          borderWidth: 1,
          barThickness: 30,
        },
      ],
    },
    title: "Overall Possession",
    titleColor: "#a7a7a7",
    titleFontSize: 18,
    legendposition: "bottom",
    legendColor: "#a7a7a7",
    legendFontSize: 16,
    layout: "horizontal",
    style: { height: 92 },
    aspect: "auto",
    options: {
      scales: {
        x: {
          min: 0,
          max: 100,
          beginAtZero: true,
          stacked: true,
          grid: {
            display: false,
            drawBorder: false,
          },
          ticks: {
            display: false,
          },
        },
        y: {
          stacked: true,
          grid: {
            display: false,
            drawBorder: false,
            drawTicks: false,
          },
          ticks: {
            display: false,
          },
        },
      },
      plugins: {
        tooltip: {
          callbacks: {
            title: (tooltipItems: { dataset: { label: string } }[]) => {
              return `${tooltipItems[0].dataset.label}`;
            },
            label: (tooltipItem: { raw: number }) => {
              return `${tooltipItem.raw}%`;
            },
          },
        },
      },
    },
  },
  argTypes: {
    legendposition: {
      options: ["top", "bottom"],
      control: { type: "radio" },
    },
    data: {
      table: {
        disable: true,
      },
    },
    options: {
      table: {
        disable: true,
      },
    },
    gridColor: {
      table: {
        disable: true,
      },
    },
    aspect: {
      table: {
        disable: true,
      },
    },
    layout: {
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
  },
};
