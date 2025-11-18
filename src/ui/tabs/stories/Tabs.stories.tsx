import React from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Tabs from "../Tabs";
import { Form, RegisterForm } from "../..";
import { LoginForm } from "../../form/stories/Form.stories";
import { Default as Register } from "../../form/stories/RegisterForm.stories";

const ReactIcon = () => {
  return (
    <svg
      height="1.75em"
      width="1.75em"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="#087ea4"
      style={{ margin: "auto", display: "block" }}
    >
      <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z" />
    </svg>
  );
};

const NextIcon = () => {
  return (
    <svg
      height="1.75em"
      width="1.75em"
      viewBox=".5 -.2 1023 1024.1"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentcolor"
      style={{ margin: "auto", display: "block" }}
    >
      <path d="m478.5.6c-2.2.2-9.2.9-15.5 1.4-145.3 13.1-281.4 91.5-367.6 212-48 67-78.7 143-90.3 223.5-4.1 28.1-4.6 36.4-4.6 74.5s.5 46.4 4.6 74.5c27.8 192.1 164.5 353.5 349.9 413.3 33.2 10.7 68.2 18 108 22.4 15.5 1.7 82.5 1.7 98 0 68.7-7.6 126.9-24.6 184.3-53.9 8.8-4.5 10.5-5.7 9.3-6.7-.8-.6-38.3-50.9-83.3-111.7l-81.8-110.5-102.5-151.7c-56.4-83.4-102.8-151.6-103.2-151.6-.4-.1-.8 67.3-1 149.6-.3 144.1-.4 149.9-2.2 153.3-2.6 4.9-4.6 6.9-8.8 9.1-3.2 1.6-6 1.9-21.1 1.9h-17.3l-4.6-2.9c-3-1.9-5.2-4.4-6.7-7.3l-2.1-4.5.2-200.5.3-200.6 3.1-3.9c1.6-2.1 5-4.8 7.4-6.1 4.1-2 5.7-2.2 23-2.2 20.4 0 23.8.8 29.1 6.6 1.5 1.6 57 85.2 123.4 185.9s157.2 238.2 201.8 305.7l81 122.7 4.1-2.7c36.3-23.6 74.7-57.2 105.1-92.2 64.7-74.3 106.4-164.9 120.4-261.5 4.1-28.1 4.6-36.4 4.6-74.5s-.5-46.4-4.6-74.5c-27.8-192.1-164.5-353.5-349.9-413.3-32.7-10.6-67.5-17.9-106.5-22.3-9.6-1-75.7-2.1-84-1.3zm209.4 309.4c4.8 2.4 8.7 7 10.1 11.8.8 2.6 1 58.2.8 183.5l-.3 179.8-31.7-48.6-31.8-48.6v-130.7c0-84.5.4-132 1-134.3 1.6-5.6 5.1-10 9.9-12.6 4.1-2.1 5.6-2.3 21.3-2.3 14.8 0 17.4.2 20.7 2z" />
      <path d="m784.3 945.1c-3.5 2.2-4.6 3.7-1.5 2 2.2-1.3 5.8-4 5.2-4.1-.3 0-2 1-3.7 2.1zm-6.9 4.5c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-7.6 4c-3.8 2-3.6 2.8.2.9 1.7-.9 3-1.8 3-2 0-.7-.1-.6-3.2 1.1z" />
    </svg>
  );
};

const TailwindIcon = () => {
  return (
    <svg
      height="1.75em"
      width="1.75em"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 54 33"
      style={{ margin: "auto", display: "block" }}
    >
      <g clipPath="url(#prefix__clip0)">
        <path
          fill="#38bdf8"
          fillRule="evenodd"
          d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path fill="#fff" d="M0 0h54v32.4H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

const tech = [
  {
    name: "ReactJS",
    body: "<p className='italic'>What is ReactJS?</p><p>ReactJS is a popular JavaScript library used for building user interfaces. It allows developers to create reusable UI components and efficiently update the interface when the data changes. ReactJS is known for its component-based architecture and virtual DOM (Document Object Model) manipulation.</p>",
  },
  {
    name: "NextJS",
    body: "<p className='italic'>What is NextJS?</p><p>NextJS is a framework built on top of ReactJS. It provides additional features like server-side rendering, automatic code splitting, and simplified routing. NextJS is commonly used for building server-rendered React applications.</p>",
  },
  {
    name: "TailwindCSS",
    body: "<p className='italic'>What is TailwindCSS?</p><p>TailwindCSS is a utility-first CSS framework that provides a set of pre-defined classes to style HTML elements. It aims to give developers more control over the design by providing a highly customizable utility class approach. It is often used in conjunction with ReactJS or other frontend frameworks.</p>",
  },
];

const meta: Meta<typeof Tabs> = {
  title: "Menus/Tabs",
  component: Tabs,
  parameters: {
    docs: {
      description: {
        component: `
The **Tabs** component organizes content into multiple panels, providing an interactive and intuitive way to switch between different sections or categories. It offers various customization options, including tab positioning, sizes, and optional icons.

### Key Features:
- **Customizable Layout:** Position tabs at the \`left\`, \`center\`, \`right\`, or use the full-width option.
- **Icons and Emojis Support:** Embed icons or emojis to enhance visual navigation.
- **Content Border Control:** Toggle borders around the content area for a cleaner layout.
- **Interactive Components:** Easily switch between different forms or information categories.

### Import:
\`\`\`jsx
import { Tabs } from '@smitch/from '@smitch/breeze';'
\`\`\`

### Example Usage:
\`\`\`jsx
<Tabs
    defaultActiveId="tab1"
    tabSize="sm"
    tabsPosition="center"
    contentBorder={true}
>
    <div id="tab1" data-title="Tab 1">Content for Tab 1</div>
    <div id="tab2" data-title="Tab 2">Content for Tab 2</div>
</Tabs>
\`\`\`
`,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="p-4 max-w-xl mx-auto">
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

const handleCancel = () => {
  console.log("TABS STORY HANDLE CANCEL");
};

const defaultContent = () => {
  return (
    <>
      <div id="tab1" data-title="Tab 1">
        <div className="p-4">Tab 1 content</div>
      </div>
      <div id="tab2" data-title="Tab 2">
        <div className="p-4">Tab 2 content</div>
      </div>
      <div id="tab3" data-title="Tab 3">
        <div className="p-4">Tab 3 content</div>
      </div>
      <div id="tab4" data-title="Tab 4">
        <div className="p-4">Tab 4 content</div>
      </div>
    </>
  );
};

const profileContent = (handleCancel: () => void) => {
  return (
    <>
      <div id="tab1" data-title="Log-in">
        <div className="p-4">{<Form {...LoginForm.args} onCancel={handleCancel} />}</div>
      </div>
      <div id="tab2" data-title="Register">
        <div className="p-4">
          {
            <RegisterForm
              {...Register.args}
              legendText="Register"
              userLabel="e-Mail"
              passwordLabel="Password"
              confirmLabel="Confirm"
              checkLabel="Terms & Conditions"
              onCancel={handleCancel}
            />
          }
        </div>
      </div>
    </>
  );
};

const fruits = [
  {
    name: "apples",
    emoji: "🍏",
    body: "<p>Some content about <strong>apples</strong></p>",
  },
  {
    name: "bananas",
    emoji: "🍌",
    body: "<p>Some content about <strong>bananas</strong></p>",
  },
  {
    name: "grapes",
    emoji: "🍇",
    body: "<p>Some content about <strong>grapes</strong></p>",
  },
  {
    name: "lemons",
    emoji: "🍋",
    body: "<p>Some content about <strong>lemons</strong></p>",
  },
];

const emojisContent = () => {
  return fruits.map((item, index) => (
    <div id={`tab${index}`} key={`tab${index}`} data-title={item.emoji} className="p-4">
      <h3 className="uppercase font-bold text-lg mb-2">{item.name}</h3>
      <div dangerouslySetInnerHTML={{ __html: item.body }} />
    </div>
  ));
};

const techContent = () => {
  return tech.map((item, index) => (
    <div id={`tab${index}`} key={`tab${index}`} data-title={item.name} className="p-4">
      <h3 className="uppercase font-bold text-lg mb-2">{item.name}</h3>
      <div dangerouslySetInnerHTML={{ __html: item.body }} />
    </div>
  ));
};

export const Default: Story = {
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    defaultActiveId: {
      table: {
        disable: true,
      },
    },
    icons: {
      table: {
        disable: true,
      },
    },
    tabStyles: {
      table: {
        disable: true,
      },
    },
    activeTabStyles: {
      table: {
        disable: true,
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    defaultActiveId: "tab1",
    minimalTabs: false,
    children: defaultContent(),
    tabSize: "sm",
    tabsPosition: "center",
    contentBorder: true,
  },
};

export const WithEmojis: Story = {
  argTypes: {
    ...Default.argTypes,
  },
  args: {
    ...Default.args,
    children: emojisContent(),
    tabSize: "xl",
  },
};

export const WithIcons: Story = {
  argTypes: {
    ...Default.argTypes,
  },
  args: {
    ...Default.args,
    children: techContent(),
    tabSize: "xl",
    icons: [<ReactIcon key="react" />, <NextIcon key="next" />, <TailwindIcon key="tailwind" />],
  },
};

export const LoginRegister: Story = {
  argTypes: {
    ...Default.argTypes,
  },
  args: {
    ...Default.args,
    children: profileContent(handleCancel),
    tabSize: "md",
    minimalTabs: true,
    contentBorder: false,
  },
  parameters: {
    actions: {
      argTypesRegex: "^on.*",
    },
  },
};
