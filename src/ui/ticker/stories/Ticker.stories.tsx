import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Ticker } from "..";

const meta: Meta = {
  title: "Feedback/Ticker",
  component: Ticker,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
The **Ticker** component is a scrolling ticker that displays a list of items. It is useful for displaying information such as stock prices, news headlines, or any other type of information that needs to be scrolled across the screen.

### Key Features:
- **Customizable Position**: The ticker can be positioned at the top or bottom of the screen.
- **Customizable Duration**: The speed of the ticker can be adjusted by changing the duration of the animation.
- **Customizable Styles**: The ticker can be styled with custom classes and inline styles.
- **Responsive Design**: The ticker is designed to be responsive and will adjust to different screen sizes.

### Import:
\`\`\`jsx
import { Ticker } from '@smitch/breeze';
\`\`\`

### Usage Example:
\`\`\`tsx
<Ticker
    position='bottom'
    duration={50}
    className='bg-danger dark:bg-info'
    style={{}}
>
    <li className='ticker-item whitespace-nowrap'>BTC: $40,000</li>
    <li className='ticker-item whitespace-nowrap'>ETH: $2,500</li>
</Ticker>
\`\`\`
    `,
      },
    },
  },
} satisfies Meta<typeof Ticker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  argTypes: {
    style: {
      table: {
        disable: true,
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    position: "bottom",
    duration: 50,
    className: "bg-danger dark:bg-info",
    style: {},
    children: (
      <>
        <li className="ticker-item whitespace-nowrap">BTC: $40,000</li>
        <li className="ticker-item whitespace-nowrap">ETH: $2,500</li>
        <li className="ticker-item whitespace-nowrap">LTC: $150</li>
        <li className="ticker-item whitespace-nowrap">XRP: $0.50</li>
        <li className="ticker-item whitespace-nowrap">VRA: $0.003</li>
        <li className="ticker-item whitespace-nowrap">TAO: $373.83</li>
        <li className="ticker-item whitespace-nowrap">SUI: $3.40</li>
        <li className="ticker-item whitespace-nowrap">BERA: $2.94</li>
      </>
    ),
  },
};
