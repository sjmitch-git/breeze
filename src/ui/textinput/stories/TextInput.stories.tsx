import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { TextInput } from "..";

const meta: Meta = {
  title: "Inputs/Text Input",
  component: TextInput,
  decorators: [
    (Story) => (
      <div className=" max-w-xl p-4 mx-auto">
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: `
The **TextInput** component is a versatile input field designed for various text entry needs. It offers flexibility in customization, accessibility features, and layout configuration to fit a range of use cases in modern UI development.

### Key Features:
- **Multiple Input Types**: Supports \`text\`, \`password\`, \`email\`, \`tel\`, \`url\`, and more for different input requirements.
- **Layout Options**: Choose between \`col\` and \`row\` layout to arrange the label and input field for optimal space usage.
- **Customizable Styles**: Adjust size, border styles, and corner rounding with properties like \`size\`, \`inputStyles\`, and \`rounded\`.
- **Accessibility Support**: Includes properties like \`placeholder\`, \`required\`, and \`autocomplete\` to meet accessibility standards.
- **Validation and Patterns**: Use \`pattern\` for regex-based input validation, especially useful for inputs like phone numbers or custom formats.

### Import:
\`\`\`jsx
import { TextInput } from '@smitch/breeze';
\`\`\`

### Example Usage:
\`\`\`jsx
<TextInput
    label="Full Name"
    placeholder="Enter your name"
    type="text"
    size="md"
    rounded="lg"
    onInputChange={(value) => console.log('Input changed:', value)}
    required={true}
    autocomplete="name"
/>
\`\`\`

### Accessibility and Best Practices:
- **Use \`label\`**: Always use a descriptive label to ensure clarity and accessibility.
- **\`autocomplete\`**: Use the \`autocomplete\` attribute to help browsers fill in known information, enhancing user experience.
- **Validation Patterns**: Apply \`pattern\` for specific formats (e.g., phone numbers) to guide user input and reduce errors.

### Input Types and Examples:
- **Text**: General input for plain text (e.g., names, addresses).
- **Email**: Validates and formats as an email address.
- **Tel**: Ideal for phone number entry, with support for patterns.
- **URL**: Input for web addresses with automatic validation.
      `,
      },
    },
  },

  tags: ["autodocs"],
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

const onInputChange = (value: string) => {
  console.log("onInputChange", value);
};

export const Default: Story = {
  argTypes: {
    className: {
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
    onInputChange: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    onInputChange: onInputChange,
    label: "Label",
    layout: "col",
    size: "md",
    title: "Some helpful info for the user",
    hint: true,
    type: "text",
    inputStyles: "border-neutral",
    autocomplete: "off",
    placeholder: "Some placeholder text",
    rounded: "md",
  },
};

export const TypeText: Story = {
  argTypes: {
    ...Default.argTypes,
    type: {
      table: {
        disable: true,
      },
    },
    autocomplete: {
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
        "cc-name",
        "cc-given-name",
        "cc-family-name",
      ],
      control: { type: "select" },
    },
  },
  args: {
    ...Default.args,
    type: "text",
    label: "Name:",
    title: "Enter your name",
    hint: false,
    required: true,
    autocomplete: "name",
    placeholder: "Your Name",
  },
};

export const TypeEMail: Story = {
  argTypes: {
    ...Default.argTypes,
    type: {
      table: {
        disable: true,
      },
    },
    autocomplete: {
      options: ["email", "username email"],
      control: { type: "select" },
    },
  },
  args: {
    ...Default.args,
    type: "email",
    name: "email",
    label: "e-Mail:",
    title: "Enter a valid e-Mail address",
    required: true,
    autocomplete: "email",
    placeholder: "name@email.com",
  },
};

export const TypeTel: Story = {
  argTypes: {
    ...Default.argTypes,
    type: {
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
    ...Default.args,
    name: "tel",
    type: "tel",
    label: "Mobile Number:",
    title: "Enter a vaild UK mobile number",
    pattern: "07[0-9]{9}",
    required: false,
    autocomplete: "tel",
    placeholder: "eg: 07111 222333",
  },
};

export const TypeURL: Story = {
  argTypes: {
    ...Default.argTypes,
    type: {
      options: ["date", "username email"],
      control: { type: "select" },
    },
    autocomplete: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    ...Default.args,
    name: "blog",
    type: "url",
    label: "Blog:",
    title: "Enter a link to your blog",
    required: false,
    autocomplete: "off",
    placeholder: "https://myblog.com",
  },
};
