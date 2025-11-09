import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Clock } from "..";

const meta: Meta = {
  title: "DateTime/Clock",
  component: Clock,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="dark:text-light">
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: `
The **Clock** component displays an analog clock that can show the current time for any specified timezone, with customizable appearance and layout options.

### Key Features:
- **Timezone Support**: Display time in various timezones.
- **Customizable Size**: Adjust the clock size to fit your design.
- **Show Seconds**: Optionally display seconds for precision.
- **Ticks**: Optionally display tick markers on the hour.
- **Light and Dark Themes**: Choose between light and dark themes for better visibility.
- **Flexible Layout**: Arrange the clock in different layouts (column, row, etc.).
- **Accessibility**: Includes an \`aria-label\` describing the current time and timezone for screen readers.

### Import:
\`\`\`jsx
import { Clock } from '@smitch/breeze';
\`\`\`

### Example Usage:
\`\`\`jsx
<Clock
    timezone="America/New_York"
    size={240}
    showSeconds={true}
    ticks={true}
    theme="light"
    layout="column"
    showCity={true}
    clockStrokeWidth={4}
    labelSize="md"
/>
\`\`\`
### Props:
- **timezone**: The timezone to display the time in. (default: 'UTC')
- **size**: The size of the clock in pixels. (default: 120)
- **showSeconds**: Whether to show seconds on the clock. (default: false)
- **ticks**: Whether to show tick markers on the hour. (default: false)
- **theme**: The theme of the clock, either 'light' or 'dark'. (default: 'light')
- **layout**: The layout of the clock, can be 'column', 'row', etc. (default: 'column')
- **clockStrokeWidth**: The stroke width of the clock face. (default: 4)
- **showLabel**: Whether to display the city name below the clock. (default: true)
- **labelSize**: The size of the labels, can be 'sm', 'md', 'lg', etc. (default: 'md')
- **className**: Additional class names for custom styling. (default: '')

                `,
      },
    },
  },
  argTypes: {
    timezone: {
      control: { type: "select" },
      options: [
        "UTC",
        "America/New_York",
        "America/Chicago",
        "America/Denver",
        "America/Los_Angeles",
        "Europe/London",
        "Europe/Paris",
        "Europe/Berlin",
        "Europe/Moscow",
        "Asia/Tokyo",
        "Asia/Shanghai",
        "Asia/Kolkata",
        "Australia/Sydney",
      ],
    },
  },
} satisfies Meta<typeof Clock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Clock",
  args: {
    timezone: "Europe/London",
    size: 240,
    showSeconds: true,
    ticks: false,
    theme: "light",
    layout: "column",
    showLabel: true,
    clockFaceStroke: 4,
    labelSize: "md",
    className: "",
  },
};

export const MultipleTimezones: Story = {
  name: "Multiple Clocks",
  render: (args) => (
    <div className="flex gap-4 justify-center">
      <Clock {...args} timezone="America/New_York" />
      <Clock {...args} timezone="Europe/London" />
      <Clock {...args} timezone="Asia/Tokyo" />
    </div>
  ),
  args: {
    size: 100,
    showSeconds: true,
    ticks: true,
    theme: "dark",
    layout: "column",
    clockFaceStroke: 2,
    labelSize: "lg",
    className: "font-mono",
    showLabel: true,
  },
  argTypes: {
    timezone: {
      table: {
        disable: true,
      },
    },
  },
};
