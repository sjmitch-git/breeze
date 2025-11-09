import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Icon } from "..";

const meta: Meta<typeof Icon> = {
  title: "Media/Icon",
  component: Icon,
  argTypes: {
    iconName: {
      control: "text",
      description: "The name of the icon from Icons8.",
    },
    iconId: {
      control: "text",
      description: "The ID of the icon from Icons8.",
    },
    iconSize: {
      control: "number",
      description: "The size of the icon in pixels.",
      defaultValue: 40,
    },
    iconColor: {
      control: "color",
      description: "The color of the icon (hex).",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
The **Icon** component fetches icons from [Icons8](https://icons8.com/) and allows customization
through various props like \`iconName\`, \`iconId\`, \`iconSize\`, and \`iconColor\`.

### Import:
\`\`\`jsx
import { Icon } from '@smitch/breeze';
\`\`\`

### Example Usage

#### Icon Name
\`\`\`jsx
<Icon iconName="beer" iconSize={40} iconColor="#ff5733" />
\`\`\`

#### Icon ID
\`\`\`jsx
<Icon iconId="8771" iconSize={60} iconColor="#ff5733" />
\`\`\`
        `,
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  name: "With Icon Name",
  args: {
    iconName: "beer",
    iconSize: 180,
    iconColor: "#efc614",
  },
  argTypes: {
    iconId: {
      table: {
        disable: true,
      },
    },
    iconStyle: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story: "This story demonstrates how to customize the Icon component using its props.",
      },
    },
  },
};

export const IconNameWithFill: Story = {
  args: {
    iconName: "beer",
    iconSize: 180,
    iconStyle: "color",
  },
  argTypes: {
    iconId: {
      table: {
        disable: true,
      },
    },
    iconColor: {
      table: {
        disable: true,
      },
    },
    iconStyle: {
      table: {
        disable: false,
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story: "This story demonstrates how to customize the Icon component using `iconStyle`.",
      },
    },
  },
};

export const WithIconId: Story = {
  args: {
    iconId: "8771",
    iconSize: 80,
    iconColor: "#ff00ff",
  },
  argTypes: {
    iconName: {
      table: {
        disable: true,
      },
    },
    iconStyle: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story: "This story demonstrates how to use the `iconId` prop to fetch an icon from Icons8.",
      },
    },
  },
};

export const WithRotation: Story = {
  args: {
    iconName: "arrow",
    iconSize: 80,
    rotate: "45",
    iconColor: "#007bff",
  },
  argTypes: {
    ...Default.argTypes,
  },
};

export const WithEmoji: Story = {
  args: {
    iconId: "khlCdbEXD0Sp",
    iconSize: 180,
    altText: "Basketball icon",
  },
  argTypes: {
    ...WithIconId.argTypes,
    iconColor: { table: { disable: true } },
  },
  parameters: {
    docs: {
      description: {
        story: "Display emojis from [icons8](https://icons8.com/icon/set/emoji/emoji/).",
      },
    },
  },
};

export const WithFlagEmoji: Story = {
  args: {
    iconId: "xapj7ZzAUZKI",
    iconSize: 180,
    altText: "Flag of the United Kingdom",
  },
  argTypes: {
    ...WithEmoji.argTypes,
  },
  parameters: {
    docs: {
      description: {
        story: "Display flag emojis from [icons8](https://icons8.com/icon/set/emoji/emoji).",
      },
    },
  },
};
