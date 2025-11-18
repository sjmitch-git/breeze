import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Video } from "..";

const videoSrc = "/bunny-trailer.mp4";
const videoPoster = "/bunny-poster.png";

const meta: Meta = {
  title: "Media/Video",
  component: Video,
  decorators: [
    (Story) => (
      <div className="max-w-md mx-auto">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    aspect: {
      description: "The aspect ratio for the video.",
      control: "select",
      options: ["video", "square", "television", "cinema", "phone", "ultrawide"],
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
      description: "URL for the image that appears before the video starts playing.",
      control: "text",
    },
    loop: {
      description: "Boolean that sets whether the video should loop when it finishes.",
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
    setDuration: {
      table: {
        disable: true,
      },
    },
    setTime: {
      table: {
        disable: true,
      },
    },
    currentTime: {
      table: {
        disable: true,
      },
    },
    volume: {
      table: {
        disable: true,
      },
    },
    play: {
      table: {
        disable: true,
      },
    },
    togglePlay: {
      table: {
        disable: true,
      },
    },
    playEnded: {
      table: {
        disable: true,
      },
    },
    pictureInPicture: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
The **Video** component allows embedding and customizing videos in your UI. It supports various video sources, aspect ratios, and playback options. You can also add error messages, preloading strategies, and loop control.

### Key Features:
- Customizable aspect ratio.
- Error message display when the video source fails to load.
- Support for video formats such as MP4, WebM, and OGG.
- Options to preload video metadata or entire content.
- Looping and custom poster image support.
- Control visibility of video controls.
- **Subtitles & Captions**: Integrate subtitle tracks in WebVTT format for accessibility, supporting multiple languages.


### Import:
\`\`\`jsx
import Video from '@smitch/breeze';
\`\`\`

### Example Usage:
\`\`\`jsx
<Video
  src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
  poster="http://media.w3.org/2010/05/bunny/poster.png"
/>
\`\`\`

### Subtitles Configuration:
- **Format**: The component supports the WebVTT format for subtitles.
- **Usage**: Provide an array of subtitle file URLs (\`tracks\`) and an array of corresponding language codes (\`srcLangs\`) for multilingual support.

**Example Subtitle File (WebVTT):**

\`\`\`
WEBVTT

00:00:00.000 --> 00:00:00.999 line:80%
Hildy!

00:00:01.000 --> 00:00:01.499 line:80%
How are you?

00:00:01.500 --> 00:00:02.999 line:80%
Tell me, is the <i>Lord of the Universe</i> in?

00:00:03.000 --> 00:00:04.299 line:80%
Yes, he's in - in a bad humor

00:00:04.300 --> 00:00:06.000 line:80%
Somebody must've stolen the crown jewels
\`\`\`

        `,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Video>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: videoSrc,
    poster: videoPoster,
  },
  parameters: {
    docs: {
      description: {
        story: "This is the default video player with standard controls.",
      },
    },
  },
};

/* export const WithError: Story = {
	argTypes: {
		aspect: {
			table: {
				disable: true,
			},
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
		className: {
			table: {
				disable: true,
			},
		},
		videoWidth: {
			table: {
				disable: true,
			},
		},
		videoHeight: {
			table: {
				disable: true,
			},
		},
		trackIndex: {
			table: {
				disable: true,
			},
		},
		poster: {
			table: {
				disable: true,
			},
		},
		loop: {
			table: {
				disable: true,
			},
		},
		preload: {
			table: {
				disable: true,
			},
		},
		controls: {
			table: {
				disable: true,
			},
		},
		tracks: {
			table: {
				disable: true,
			},
		},
		srcLangs: {
			table: {
				disable: true,
			},
		},
	},
	args: {
		src: 'https://media.w3.org/2010/05/sintel/undefined.mp4',
		poster: undefined,
		muted: true,
		autoplay: 'autoplay',
		defaultError: 'Error: Video cannot be loaded.',
	},
	parameters: {
		docs: {
			disable: true,
		},
	},
} */

export const Subtitles: Story = {
  argTypes: {
    defaultError: {
      table: {
        disable: true,
      },
    },
    grayscale: {
      table: {
        disable: true,
      },
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
    className: {
      table: {
        disable: true,
      },
    },
    videoWidth: {
      table: {
        disable: true,
      },
    },
    videoHeight: {
      table: {
        disable: true,
      },
    },
    trackIndex: {
      table: {
        disable: true,
      },
    },
    poster: {
      table: {
        disable: true,
      },
    },
    loop: {
      table: {
        disable: true,
      },
    },
    preload: {
      table: {
        disable: true,
      },
    },
    controls: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    src: "./example.mp4",
    tracks: ["./subs.vtt", "./subs_fr.vtt", "./subs_ja.vtt"],
    srcLangs: ["en", "fr", "ja"],
    aspect: "television",
    poster: undefined,
    controlOptions: ["captions"],
  },
};

export const LoopingBackground: Story = {
  args: {
    src: "https://cdn.pixabay.com/video/2020/11/07/55859-504238916_small.mp4",
    poster: "/looping-poster.png",
    muted: true,
    autoplay: true,
    loop: true,
    play: true,
    preload: "auto",
    controls: false,
    videoHeight: "100%",
    aspect: "video",
  },
  argTypes: {
    defaultError: {
      table: {
        disable: true,
      },
    },
    tracks: {
      table: {
        disable: true,
      },
    },
    srcLangs: {
      table: {
        disable: true,
      },
    },
    trackIndex: {
      table: {
        disable: true,
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
    videoWidth: {
      table: {
        disable: true,
      },
    },
  },
};
