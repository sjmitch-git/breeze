import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Hero } from "..";
import { Button, Form } from "../..";
import { NewsletterForm } from "../../form/stories/Form.stories";

const meta: Meta = {
  title: "Media/Hero",
  component: Hero,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="-mt-4 -mr-4 -ml-4">
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: `
The **Hero** component is a versatile component used to create visually engaging and informative headers for your web pages. It provides a structured layout for showcasing important content, such as a title, description, and call-to-action buttons.

### Key Features:
- **Flexible Layout:**  The Hero component allows you to customize the alignment of its content, including the title, body, and children elements.
- **Theme Support:**  You can easily switch between light and dark themes to match your website's design.
- **Customizable Title:**  Control the level, transform, and weight of the title to create the desired visual impact.
- **Background Options:**  The Hero component supports background images and videos, adding visual interest to your design.


### Import:
\`\`\`jsx
import { Hero } from '@smitch/fluid';
\`\`\`

### Example Usage:
\`\`\`jsx
<Hero
  align="center"
  body="Lorem ipsum dolor sit amet. Aut ipsa voluptatem sit sint amet et illo odio id velit internos et nihil consectetur ut officia tempore sed numquam officia."
  theme="light"
  title="Hero Title"
  titleLevel={1}
  titleTransform="uppercase"
  titleWeight="semibold"
>
  <div className="flex gap-4 justify-around items-center flex-grow">
    <Button
		background="primary"
	>
      Primary
    </Button>
    <Button
      background="info"
    >
      Info
    </Button>
  </div>
</Hero>
\`\`\`

`,
      },
    },
  },
} satisfies Meta<typeof Hero>;

export default meta;

type Story = StoryObj<typeof meta>;

const copy =
  "Lorem ipsum dolor sit amet. Aut ipsa voluptatem sit sint amet et illo odio id velit internos et nihil consectetur ut officia tempore sed numquam officia.";

const htmlCopy = `<ul><li>- Dolor sit amet</li><li>- Aut ipsa voluptatem</li><li>- Numquam officia</li></ul>`;

const buttons = () => {
  return (
    <div className="flex gap-4 justify-around items-center flex-grow">
      <Button
        btnBackground="primary"
        layout="circle"
        size="xl"
        className="text-4xl"
        shadow="md"
      >
        CTA
      </Button>
    </div>
  );
};

export const Default: Story = {
  args: {
    title: "Hero Title",
    body: copy,
    theme: "responsive",
    aspectRatio: "landscape",
    layout: "col",
    align: "center",
    titleLevel: 1,
    titleTransform: "uppercase",
    titleWeight: "semibold",
    children: buttons(),
    randomImage: false,
  },
  argTypes: {
    children: {
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
  },
};

export const BackgroundImage: Story = {
  args: {
    ...Default.args,
    title: "Background Image",
    theme: "dark",
    titleLevel: 1,
    bgImage: "/img/mountains.avif",
    randomImage: false,
    aspectRatio: "landscape",
    bgBlur: false,
    bgGrayscale: "none",
    body: (
      <span className="text-lg drop-shadow-md bg-slate-500/50">
        This story uses an image as a background
      </span>
    ),
  },
  argTypes: {
    ...Default.argTypes,
    bgVideo: {
      table: {
        disable: true,
      },
    },
    bgVideoPoster: {
      table: {
        disable: true,
      },
    },
  },
};

export const RandomImage: Story = {
  args: {
    ...Default.args,
    title: "Random Image",
    titleLevel: 1,
    body: (
      <span className="text-lg drop-shadow-md bg-slate-500/50">
        This story uses a random image from LoremFlickr as a background
      </span>
    ),
    randomImage: true,
    categoryTags: "abstract,nature,landscape,texture,pattern",
    aspectRatio: "landscape",
    bgBlur: true,
    bgGrayscale: "none",
  },
  argTypes: {
    ...Default.argTypes,
    bgVideo: {
      table: {
        disable: true,
      },
    },
    bgVideoPoster: {
      table: {
        disable: true,
      },
    },
  },
};

export const WithForm: Story = {
  args: {
    ...Default.args,
    title: "Newsletter",
    layout: "row",
    align: "left",
    theme: "dark",
    titleTransform: "capitalize",
    titleLevel: 2,
    aspectRatio: "auto",
    children: (
      <div className="dark bg-info-dark p-2 flex-grow relative">
        <Form {...NewsletterForm.args}>{NewsletterForm.args?.children}</Form>
      </div>
    ),
    body: (
      <ul className="list-disc list-inside">
        <li>Dolor sit amet</li>
        <li>Aut ipsa voluptatem</li>
        <li>Numquam officia</li>
      </ul>
    ),
  },
  argTypes: {
    ...Default.argTypes,
    aspectRatio: {
      table: {
        disable: true,
      },
    },
  },
};

export const BackgroundVideo: Story = {
  args: {
    ...Default.args,
    title: "Background Video",
    body: "This story uses a looping video as a background",
    theme: "dark",
    titleLevel: 3,
    bgVideo:
      "https://cdn.pixabay.com/video/2020/11/07/55859-504238916_small.mp4",
    bgVideoPoster: "/looping-poster.png",
    bgBlur: true,
    bgGrayscale: "sepia",
    layout: "col",
    aspectRatio: "video",
  },
  argTypes: {
    ...Default.argTypes,
    bgImage: {
      table: {
        disable: true,
      },
    },
    theme: {
      table: {
        disable: true,
      },
    },
  },
};
