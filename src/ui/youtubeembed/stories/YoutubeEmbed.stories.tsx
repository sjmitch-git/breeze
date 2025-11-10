import { Meta, StoryObj } from "@storybook/nextjs-vite";
import YoutubeEmbed from "../YoutubeEmbed";

const meta: Meta = {
  title: "Media/YouTube Embed",
  component: YoutubeEmbed,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
The **YouTube Embed** component allows users to embed YouTube videos seamlessly in their application. It provides several options to control the player's appearance and behavior, such as autoplay, controls, loop, and mute.

### Key Features:
- Easily embed YouTube videos via a simple video ID.
- Control player behavior with parameters like autoplay, loop, and mute.
- Customizable iframe options such as lazy loading.
- Control permissions through the \`allow\` attribute for enhanced security and customization.

### Import:
\`\`\`jsx
import { YoutubeEmbed } from '@smitch/fluid'
\`\`\`

### Example Usage:
\`\`\`jsx
<YoutubeEmbed
  videoId="Q4cAzEvMsHE"
  playerParams={{ autoplay: 1, controls: 1 }}
  loading="lazy"
/>
\`\`\`
				`,
      },
    },
  },
  argTypes: {
    videoId: {
      control: "text",
      description: "The ID of the YouTube video to embed.",
    },
    playerParams: {
      description:
        "Additional parameters for the YouTube player, such as autoplay, controls, mute, and loop.",
      control: "object",
      defaultValue: {},
    },
    loading: {
      control: "select",
      options: ["eager", "lazy"],
      description: "Loading behavior for the iframe.",
    },
    allow: {
      control: "text",
      description: "Specifies permissions for the iframe.",
      defaultValue:
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    },
  },
} satisfies Meta<typeof YoutubeEmbed>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    videoId: "dQw4w9WgXcQ",
    title: "YouTube video player",
    playerParams: {
      controls: 1,
      autoplay: 0,
      mute: 0,
      loop: 0,
    },
    allow:
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    loading: "lazy",
  },
  parameters: {
    docs: {
      description: {
        story: "Default YouTube embed with standard controls and lazy loading.",
      },
    },
  },
};

export const Autoplay: Story = {
  args: {
    ...Default.args,
    playerParams: {
      controls: 1,
      autoplay: 1,
    },
    loading: "eager",
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

export const NoControls: Story = {
  args: {
    ...Default.args,
    playerParams: {
      controls: 0,
    },
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

export const AutoplayMuteLoop: Story = {
  args: {
    ...Default.args,
    playerParams: {
      controls: 1,
      autoplay: 1,
      mute: 1,
      loop: 1,
    },
    allow:
      "autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; loop",
    loading: "lazy",
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};
