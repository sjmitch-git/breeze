import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { StatBar } from "..";

const meta: Meta<typeof StatBar> = {
  title: "Data Visualization/Stat Bar",
  component: StatBar,
  argTypes: {
    labels: {
      control: "object",
      description: "Two team labels to display above the bar.",
      defaultValue: ["Team A", "Team B"],
    },
    data: {
      control: "object",
      description: "Two numbers representing the absolute values for each team.",
      defaultValue: [60, 40],
    },
    colors: {
      control: "object",
      description: "Two colors for the bar sections (first and second teams).",
      defaultValue: ["#1e90ff", "#ff4500"], // Default colors: blue and orange
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
The **StatBar** component is used to display a visual representation of statistics (e.g., possession, goals) as a horizontal progress bar.
The bar dynamically adjusts to represent the data proportions as percentages.

### Import:
\`\`\`tsx
import { StatBar } from '@smitch/breeze'
\`\`\`

### Example Usage

\`\`\`tsx
<StatBar
  labels={['England', 'Scotland']}
  data={[73, 27]}
  colors={['#1e90ff', '#ff4500']}
/>
\`\`\`
        `,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="max-w-md mx-auto">
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof StatBar>;

export const Default: Story = {
  args: {
    title: "Shots on target",
    titleAlign: "center",
    titleSize: 4,
    titleWeight: "semibold",
    labels: ["Liverpool", "Man City"],
    showLabels: true,
    data: [18, 2],
    colors: ["#e31b23", "#6caddf"],
  },
  parameters: {
    docs: {
      description: {
        story: "A simple stat bar showing shots on target between two teams.",
      },
    },
  },
};

export const PercentageData: Story = {
  args: {
    ...Default.args,
    title: "Possession %",
    data: [43.8, 56.2],
  },
};

export const NoData: Story = {
  args: {
    labels: ["Team A", "Team B"],
    data: [0, 0],
    colors: ["#6c757d", "#adb5bd"],
  },
  parameters: {
    docs: {
      description: {
        story: "An example showing how the StatBar handles cases with no data.",
      },
    },
  },
};
