import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Dropdown } from "..";

const links = [
  {
    href: "#",
    label: "Group Link",
    links: [
      {
        href: "#",
        label: "Sub Link 1",
        links: [
          {
            href: "#",
            label: "Sub sub link 1",
          },
          {
            href: "#",
            label: "Sub sub link 2",
          },
        ],
      },
      {
        href: "#",
        label: "Sub Link 2",
      },
      {
        href: "#",
        label: "Sub Link 3",
      },
    ],
  },
];

const meta: Meta = {
  title: "Menus/Dropdown",
  component: Dropdown,
  decorators: [
    (Story) => (
      <div className="p-4">
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
The **Dropdown** component is a versatile menu system that enables easy access to nested links or items within a hierarchical structure. It supports custom button styling, various sizes, and flexible layouts, making it adaptable to a wide range of interfaces.

### Key Features:
- **Nested Links:** Supports multi-level submenus to organize links into groups and subgroups.
- **Button Customization:** Choose from different layouts, backgrounds, and colors for the dropdown trigger button.
- **Size Options:** Provides three size variants (\`md\`, \`lg\`, \`xl\`) to suit different UI requirements.
- **Flexible Styling:** Apply custom classes for specific themes or layouts.

### Import:
\`\`\`jsx
import { Dropdown } from '@smitch/breeze';
\`\`\`

### Example Usage:
\`\`\`jsx
const links = [
	{
		href: '#',
		label: 'Group Link',
		links: [
			{
				href: '#',
				label: 'Sub Link 1',
				links: [
					{
						href: '#',
						label: 'Sub sub link 1',
					},
					{
						href: '#',
						label: 'Sub sub link 2',
					},
				],
			},
			{
				href: '#',
				label: 'Sub Link 2',
			},
			{
				href: '#',
				label: 'Sub Link 3',
			},
		],
	},
]

<Dropdown
    size="md"
    buttonLayout="circle"
    buttonBackground="transparent"
    buttonColor="current"
    links={links}
/>
\`\`\`

In this example, a Dropdown component with a circular, transparent button is displayed, using the nested \`links\` data to populate the menu.
`,
      },
    },
  },
  argTypes: {
    links: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    links: links,
    size: "md",
    buttonLayout: "circle",
    buttonBackground: "info",
    buttonColor: "light",
    prefetch: false,
  },
};

export const Styled: Story = {
  args: {
    links: links,
    size: "lg",
    buttonLayout: "circle",
    buttonBackground: "info",
    buttonColor: "light",
    prefetch: false,
    className:
      "bg-dark text-light dark:bg-light dark:text-dark rounded-full py-3 ps-6 pe-4 border-2 border-accent",
  },
};
