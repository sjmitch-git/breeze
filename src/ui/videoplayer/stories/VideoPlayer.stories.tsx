import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { VideoPlayer } from "..";

const videoSrc = "/bunny-trailer.mp4";
const videoPoster = "/bunny-poster.png";

const meta: Meta = {
  title: "Media/Video Player",
  component: VideoPlayer,
  decorators: [
    (Story) => (
      <div className="max-w-md mx-auto">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    aspect: {
      description: "The aspect ratio for the video player.",
      control: "select",
      options: [
        "video",
        "square",
        "television",
        "cinema",
        "phone",
        "ultrawide",
      ],
    },
    defaultError: {
      description: "Default error message when the video cannot be loaded.",
      control: "text",
    },
    preload: {
      description:
        'Specifies how the video should load. Options are "auto", "metadata", and "none".',
      control: "select",
      options: ["auto", "metadata", "none"],
    },
    src: {
      description: "The source URL of the video.",
      control: "text",
    },
    poster: {
      description:
        "URL for the image that appears before the video starts playing.",
      control: "text",
    },
    loop: {
      description:
        "Boolean that sets whether the video should loop when it finishes.",
      control: "boolean",
    },
    muted: {
      table: {
        disable: true,
      },
    },
    autoplay: {
      table: {
        disable: true,
      },
    },
    fallback: {
      table: {
        disable: true,
      },
    },
    formats: {
      table: {
        disable: true,
      },
    },
    progressBg: {
      description: "Sets background color for scrub bar",
      control: "color",
    },
    progressColor: {
      description: "Sets active background color for scrub bar",
      control: "color",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
The **VideoPlayer** component provides a customizable interface for embedding video content in your UI. This component offers a range of playback controls, aspect ratios, subtitle support, and error handling.

### Key Features:
- Supports multiple video formats (MP4, WebM, OGG) for cross-browser compatibility.
- Customizable playback options, including autoplay, looping, and preloading.
- Supports a variety of aspect ratios: video, square, cinema, ultrawide, etc.
- Ability to add custom error messages when the video fails to load.
- Poster images to display before playback starts.
- Subtitle and caption track support, with multiple languages.
- Fine-grained control over video player elements, including sound, fullscreen, picture-in-picture (PiP), and captions.

### Import:
\`\`\`jsx
import VideoPlayer from '@smitch/fluid'
\`\`\`

### Example Usage:
\`\`\`jsx
<VideoPlayer
  src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
  poster="http://media.w3.org/2010/05/bunny/poster.png"
/>
\`\`\`
        `,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof VideoPlayer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: videoSrc,
    poster: videoPoster,
    preload: "metadata",
    loop: false,
    aspect: "video",
    muted: false,
    defaultError: "Oops! There was an unknown error loading the video.",
  },
  parameters: {
    docs: {
      description: {
        story: "This is the default video player with custom controls.",
      },
    },
  },
};

export const Subtitles: Story = {
  args: {
    ...Default.args,
    src: "./example.mp4",
    poster: undefined,
    tracks: ["./subs.vtt", "./subs_fr.vtt", "./subs_ja.vtt"],
    srcLangs: ["en", "fr", "ja"],
    controlOptions: ["captions"],
    aspect: "television",
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};
