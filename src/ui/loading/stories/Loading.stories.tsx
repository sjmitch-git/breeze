import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Loading } from "..";
import { FaCircleArrowDown } from "react-icons/fa6";

const meta: Meta<typeof Loading> = {
  title: "Feedback/Loading",
  component: Loading,
  decorators: [
    (Story) => (
      <div className="p-8">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    spinner: {
      options: [
        "bars",
        "clock",
        "dots",
        "pulse",
        "spindots",
        "spinner",
        "wifi",
      ],
      control: { type: "radio" },
    },
    layout: {
      options: ["col", "col_reverse", "row", "row_reverse"],
      control: { type: "radio" },
    },
  },
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
The **Loading** component indicates background processes using various spinner animations and customizable layouts.

### Key Features:
- Multiple spinner types, layouts, and color schemes.
- Customizable spinners (React components or emojis).
- Animation controls to customize spinner behavior (spin, bounce, pulse, etc.).

### Import
\`\`\`tsx
import { Loading } from '@smitch/fluid'
\`\`\`

### Example Usage:
\`\`\`tsx
<Loading
  spinner="spinner"
  caption="Loading"
  size="md"
  loadingColor="warning"
  layout="col"
/>
\`\`\`

`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default Icons",
  args: {
    spinner: "spinner",
    caption: "Loading",
    size: "md",
    loadingColor: "warning",
    layout: "col",
    modal: false
  },
  argTypes: {
    customSpinner: {
      table: {
        disable: true,
      },
    },
    customAnimate: {
      table: {
        disable: true,
      },
    },
  },
};

export const CustomIcons: Story = {
  argTypes: {
    spinner: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    customSpinner: <FaCircleArrowDown />,
    customAnimate: "bounce",
    caption: "Downloading",
    size: "lg",
    loadingColor: "warning",
    layout: "col",
  },
};

export const CustomEmoji: Story = {
  argTypes: {
    ...CustomIcons.argTypes,
  },
  args: {
    customSpinner: "☎️",
    customAnimate: "pulse",
    caption: "Incoming Call",
    size: "lg",
    loadingColor: "danger",
    layout: "col",
  },
};
