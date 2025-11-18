import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { DoughnutChart } from "..";

const meta: Meta = {
  title: "Data Visualization/Doughnut Chart",
  component: DoughnutChart,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
The **DoughnutChart** component is a circular chart divided into slices to illustrate numerical proportions. It is ideal for displaying relative data proportions for various categories.

### Key Features:
- **Responsive Design**: Automatically adjusts size and layout for any screen size.
- **Chart.js Configuration**: Options can be passed to customize appearance and behavior.
- **Legend Positioning**: Customizable legend position with the \`legendposition\` prop.

### Import:
\`\`\`jsx
import { DoughnutChart } from '@smitch/breeze/charts'
\`\`\`

### Example Usage:
\`\`\`jsx
<DoughnutChart
  data={{
    labels: ['Electronics', 'Furniture', 'Clothing', 'Books', 'Other'],
    datasets: [
        {
            label: 'Product Sales Distribution',
            data: [120, 150, 100, 80, 50],
        },
    ],
  }}
  title="Sales Distribution by Category"
  legendposition="bottom"
  options = {
	borderWidth: 0,
  }
/>
\`\`\`

### Data Structure:
\`\`\`jsx
data = {
    datasets: [{
        data: [10, 20, 30]
    }],

    labels: [
        'Red',
        'Yellow',
        'Blue'
    ]
}
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
} satisfies Meta<typeof DoughnutChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Doughnut Chart",
  args: {
    data: {
      labels: ["Electronics", "Furniture", "Clothing", "Books", "Other"],
      datasets: [
        {
          label: "Product Sales Distribution",
          data: [120, 150, 100, 80, 50],
        },
      ],
    },
    title: "Product Sales by Category",
    titleColor: "#a7a7a7",
    titleFontSize: 18,
    legendposition: "bottom",
    legendColor: "#a7a7a7",
    legendFontSize: 15,
    border: false,
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

export const DoughnutInline: Story = {
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

export const HalfDoughnut: Story = {
  args: {
    data: {
      labels: ["England", "Rep. Ireland"],
      datasets: [
        {
          label: "Possession Percentage",
          data: [73.7, 26.3],
          backgroundColor: ["rgba(235, 40, 40, 1)", "rgba(20, 200, 20, 1)"],
        },
      ],
    },
    title: "Overall Possession",
    titleColor: "#a7a7a7",
    titleFontSize: 18,
    legendposition: "bottom",
    legendColor: "#a7a7a7",
    legendFontSize: 15,
    aspect: "landscape",
    border: true,
    options: {
      rotation: -90,
      circumference: 180,
      plugins: {
        tooltip: {
          callbacks: {
            label: (tooltipItem: { raw: number }) => {
              return `${tooltipItem.raw}% possession`;
            },
          },
        },
      },
    },
  },
  argTypes: {
    ...Default.argTypes,
    legendposition: {
      options: ["top", "bottom"],
    },
  },
};

export const HalfDoughnutInline: Story = {
  args: {
    data: {
      labels: ["England", "Rep. Ireland"],
      datasets: [
        {
          label: "Possession Percentage",
          data: [73.7, 26.3],
          backgroundColor: ["rgba(255, 20, 20, 1)", "rgba(20, 200, 20, 1)"],
        },
      ],
    },
    title: "Overall Possession",
    titleColor: "#a7a7a7",
    titleFontSize: 18,
    legendposition: "left",
    legendColor: "#a7a7a7",
    legendFontSize: 15,
    aspect: "auto",
    border: true,
    options: {
      rotation: -90,
      circumference: 180,
      plugins: {
        tooltip: {
          callbacks: {
            label: (tooltipItem: { raw: number }) => {
              return `${tooltipItem.raw}% possession`;
            },
          },
        },
      },
    },
  },
  argTypes: {
    ...Default.argTypes,
    legendposition: {
      options: ["left", "right"],
    },
  },
};
