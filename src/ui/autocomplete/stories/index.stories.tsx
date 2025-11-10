import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Autocomplete } from "..";

import data from "../../../data/countries.json";

const meta: Meta = {
  title: "Inputs/Autocomplete",
  component: Autocomplete,
  argTypes: {
    data: {
      table: {
        disable: true,
      },
    },
    list: {
      table: {
        disable: true,
      },
    },
    name: {
      table: {
        disable: true,
      },
    },
    onChange: {
      action: "changed",
      description:
        "Callback function that triggers when the input value changes",
      table: {
        disable: true,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="max-w-xl mx-auto p-4">
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
The **Autocomplete** component provides a searchable dropdown to help users find and select items from a list. This implementation supports a variety of customization options, making it ideal for country selectors, search bars, and other input-driven lists.

### Key Features:
- **Dynamic Suggestions**: Displays options based on user input.
- **Customizable Layout**: Choose between column or row layouts.
- **Size Options**: Available in \`sm\`, \`md\`, \`lg\`, and \`xl\` sizes.
- **Rounded Corners**: Multiple options for rounded styling.
- **ARIA Compliance**: Supports accessibility with custom \`autocomplete\` attributes.

### Import:
\`\`\`jsx
import { Autocomplete } from '@smitch/breeze';
\`\`\`

### Example Usage:
\`\`\`jsx
import data from '@/data/countries.json'

<Autocomplete
    list="countries"
    placeholder="Select Country"
    size="md"
    required={false}
    label="Country"
    autocomplete="country-name"
    data={data}
/>
\`\`\`

In this example, the Autocomplete component is set up with a medium size, a country list, and uses external data imported from a JSON file.
`,
      },
    },
  },
} satisfies Meta<typeof Autocomplete>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    list: "countries",
    placeholder: "Select Country",
    size: "md",
    required: false,
    label: "Country",
    autocomplete: "country-name",
    layout: "row",
    rounded: "md",
    data: data,
  },
  parameters: {
    actions: {
      argTypesRegex: "^on.*",
    },
  },
};

/* Default.decorators = [
	(Story) => (
		<div className='bg-light dark:bg-transparent dark:text-light p-4'>
			<Story />
		</div>
	),
] */
