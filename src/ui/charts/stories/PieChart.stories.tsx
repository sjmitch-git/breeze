import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PieChart } from "..";

const meta: Meta = {
  title: "Data Visualization/Pie Chart",
  component: PieChart,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
The **PieChart** component is a circular chart divided into slices to illustrate numerical proportions. It is ideal for displaying relative data proportions for various categories.

### Key Features:
- **Responsive Design**: Automatically adjusts size and layout for any screen size.
- **Chart.js Configuration**: Options can be passed to customize appearance and behavior.

### Import:
\`\`\`jsx
import { PieChart } from '@smitch/breeze/charts'
\`\`\`

### Example Usage:
\`\`\`jsx
<PieChart
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
  aspect="portrait"
  border={false}
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
} satisfies Meta<typeof PieChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Pie Chart",
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
    aspect: "portrait",
    border: false,
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
    legendposition: {
      options: ["top", "bottom"],
    },
  },
};

export const PieChartInline: Story = {
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

export const HalfPie: Story = {
  args: {
    data: {
      labels: ["England", "Rep. Ireland"],
      datasets: [
        {
          label: "Possession Percentage",
          data: [73.7, 26.3],
        },
      ],
    },
    title: "Ball Possession",
    titleColor: "#a7a7a7",
    titleFontSize: 18,
    legendposition: "bottom",
    legendColor: "#a7a7a7",
    legendFontSize: 15,
    aspect: "landscape",
    border: false,
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
      options: ["bottom", "top"],
    },
  },
};

export const HalfPieInline: Story = {
  args: {
    ...HalfPie.args,
    legendposition: "left",
    aspect: "auto",
  },
  argTypes: {
    ...Default.argTypes,
    legendposition: {
      options: ["left", "right"],
    },
  },
};
