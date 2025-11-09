import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Input } from "..";

const meta: Meta = {
  title: "Inputs/Input",
  component: Input,
  decorators: [
    (Story) => (
      <div className="max-w-lg mx-auto p-4">
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: `
The **Input** component is a versatile form element designed for various input types, including text, email, password, number, and more. It supports different sizes, autocomplete options, and custom styles to fit various UI needs.

### Key Features:
- **Multiple Input Types**: Supports \`text\`, \`email\`, \`password\`, \`number\`, and more.
- **Custom Styling**: Easily style with \`rounded\`, \`size\`, and \`className\` props.
- **Accessibility**: \`aria-label\`, \`title\`, and \`hint\` for enhanced accessibility.
- **Validation Patterns**: Option to include \`pattern\` for input validation.
- **Responsive Design**: Adjustable size and responsive input controls.

### Import:
\`\`\`jsx
import { Input } from '@smitch/breeze';
\`\`\`

### Example Usage:
\`\`\`jsx
<Input
    type="text"
    placeholder="Enter your text"
    size="md"
    title="Input Field"
    hint={true}
    rounded="md"
/>
\`\`\`
        `,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

const passwordPattern = "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}";

export const Default: Story = {
  argTypes: {
    onChange: {
      table: {
        disable: true,
      },
    },
    onInput: {
      table: {
        disable: true,
      },
    },
    tabindex: {
      table: {
        disable: true,
      },
    },
    hidden: {
      table: {
        disable: true,
      },
    },
    ariaLabel: {
      table: {
        disable: true,
      },
    },
    readonly: {
      table: {
        disable: true,
      },
    },
    name: {
      table: {
        disable: true,
      },
    },
    id: {
      table: {
        disable: true,
      },
    },
    list: {
      table: {
        disable: true,
      },
    },
    type: {
      table: {
        disable: true,
      },
    },
    autocorrect: {
      table: {
        disable: true,
      },
    },
    spellcheck: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    type: "text",
    size: "md",
    placeholder: "Enter Input",
    rounded: "md",
  },
};

export const Text: Story = {
  argTypes: {
    ...Default.argTypes,
    autocomplete: {
      control: "select",
      options: [
        "off",
        "on",
        "name",
        "given-name",
        "family-name",
        "username",
        "street-address",
        "address-line1",
        "address-level2",
        "address-level1",
        "country",
        "country-name",
        "postal-code",
      ],
    },
    type: {
      table: {
        disable: true,
      },
    },
    list: {
      table: {
        disable: true,
      },
    },
    pattern: {
      table: {
        disable: true,
      },
    },
    min: {
      table: {
        disable: true,
      },
    },
    max: {
      table: {
        disable: true,
      },
    },
    step: {
      table: {
        disable: true,
      },
    },
    accept: {
      table: {
        disable: true,
      },
    },
    multiple: {
      table: {
        disable: true,
      },
    },
    checked: {
      table: {
        disable: true,
      },
    },
    value: {
      table: {
        disable: true,
      },
    },
    name: {
      table: {
        disable: true,
      },
    },
    id: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    type: "text",
    size: "md",
    autocomplete: "name",
    placeholder: "Enter your name",
    title: "Some information for the user",
    hint: true,
    required: false,
    disabled: false,
  },
};

export const Email: Story = {
  argTypes: {
    ...Text.argTypes,
    autocomplete: {
      table: {
        disable: true,
      },
    },
    pattern: {
      table: {
        disable: false,
      },
    },
  },
  args: {
    type: "email",
    size: "md",
    autocomplete: "email",
    placeholder: "Enter your email",
    hint: true,
    pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$",
    title: "Please enter a valid email address.",
  },
};

export const Password: Story = {
  argTypes: {
    ...Text.argTypes,
    autocomplete: {
      control: "select",
      options: ["new-password", "current-password"],
      table: {
        disable: false,
      },
    },
    pattern: {
      table: {
        disable: false,
      },
    },
  },
  args: {
    type: "password",
    size: "md",
    autocomplete: "current-password",
    placeholder: "Enter your password",
    hint: true,
    pattern: passwordPattern,
    title:
      "Password must be 8-12 characters long, include at least one digit, one uppercase letter, and one symbol.",
  },
};

export const Checkbox: Story = {
  argTypes: {
    ...Default.argTypes,
    autocomplete: {
      table: {
        disable: true,
      },
    },
    type: {
      table: {
        disable: true,
      },
    },
    list: {
      table: {
        disable: true,
      },
    },
    min: {
      table: {
        disable: true,
      },
    },
    max: {
      table: {
        disable: true,
      },
    },
    step: {
      table: {
        disable: true,
      },
    },
    accept: {
      table: {
        disable: true,
      },
    },
    multiple: {
      table: {
        disable: true,
      },
    },
    placeholder: {
      table: {
        disable: true,
      },
    },
    value: {
      table: {
        disable: true,
      },
    },
    name: {
      table: {
        disable: true,
      },
    },
    hint: {
      table: {
        disable: true,
      },
    },
    pattern: {
      table: {
        disable: true,
      },
    },
    title: {
      table: {
        disable: true,
      },
    },
    checked: {
      table: {
        disable: true,
      },
    },
    defaultChecked: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    type: "checkbox",
    size: "md",
  },
};

export const Radio: Story = {
  argTypes: {
    ...Checkbox.argTypes,
  },
  args: {
    type: "radio",
    size: "md",
    name: "radioGroup",
    rounded: "full",
  },
};

export const Color: Story = {
  argTypes: {
    ...Checkbox.argTypes,
    disabled: {
      table: {
        disable: true,
      },
    },
    required: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    type: "color",
    size: "md",
    rounded: "md",
    value: "#ff00ff",
  },
};

export const DatesAndTime: Story = {
  argTypes: {
    ...Default.argTypes,
    placeholder: {
      table: {
        disable: true,
      },
    },
    pattern: {
      table: {
        disable: true,
      },
    },
    type: {
      control: "select",
      options: ["date", "datetime-local", "month", "week", "time"],
      table: {
        disable: false,
      },
    },
    list: {
      table: {
        disable: true,
      },
    },
    accept: {
      table: {
        disable: true,
      },
    },
    multiple: {
      table: {
        disable: true,
      },
    },
    checked: {
      table: {
        disable: true,
      },
    },
    value: {
      table: {
        disable: true,
      },
    },
    name: {
      table: {
        disable: true,
      },
    },
    min: {
      table: {
        disable: true,
      },
    },
    max: {
      table: {
        disable: true,
      },
    },
    step: {
      table: {
        disable: true,
      },
    },
    autocomplete: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    type: "date",
    size: "md",
    name: "date",
    title: "Some helpful info for the user",
    hint: true,
    rounded: "md",
  },
};

export const URL: Story = {
  argTypes: {
    ...Text.argTypes,
    autocomplete: {
      table: {
        disable: true,
      },
    },
    required: {
      table: {
        disable: true,
      },
    },
    disabled: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    type: "url",
    size: "md",
    autocomplete: "on",
    placeholder: "https://",
    name: "url",
    hint: true,
    title: "Enter a valid url",
  },
};

export const Number: Story = {
  argTypes: {
    ...Default.argTypes,
    autocomplete: {
      table: {
        disable: true,
      },
    },
    placeholder: {
      table: {
        disable: true,
      },
    },
    pattern: {
      table: {
        disable: true,
      },
    },
    type: {
      table: {
        disable: true,
      },
    },
    list: {
      table: {
        disable: true,
      },
    },
    accept: {
      table: {
        disable: true,
      },
    },
    multiple: {
      table: {
        disable: true,
      },
    },
    checked: {
      table: {
        disable: true,
      },
    },
    name: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    type: "number",
    size: "md",
    autocomplete: "off",
    hint: true,
    title: "Quantity (between 1 and 9)",
    name: "quantity",
    min: "1",
    max: "9",
    step: "1",
    value: "1",
    rounded: "md",
  },
};

export const Search: Story = {
  argTypes: {
    ...Text.argTypes,
    autocomplete: {
      table: {
        disable: true,
      },
    },
    required: {
      table: {
        disable: true,
      },
    },
    disabled: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    type: "search",
    size: "md",
    autocomplete: "on",
    placeholder: "Search this site",
    name: "search",
  },
};

export const Telephone: Story = {
  argTypes: {
    ...Text.argTypes,
    autocomplete: {
      table: {
        disable: true,
      },
    },
    pattern: {
      table: {
        disable: false,
      },
    },
  },
  args: {
    type: "tel",
    size: "md",
    autocomplete: "tel",
    placeholder: "e.g. 07123 456 789 or +44 7123 456 789",
    hint: true,
    title: "Enter a vaild UK mobile number",
    pattern: "^(+44s?|0)7d{9}$",
    name: "telNo",
    rounded: "md",
  },
};
