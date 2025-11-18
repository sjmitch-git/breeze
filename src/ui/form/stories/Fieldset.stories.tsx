import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Fieldset from "../Fieldset";
import { TextInput } from "../..";

const meta: Meta = {
  title: "Forms/Fieldset",
  component: Fieldset,
  decorators: [
    (Story) => (
      <div className="max-w-2xl mx-auto p-4">
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: `
The **Fieldset** component is used to group related form elements together, improving form organization and accessibility. It provides a semantic wrapper for forms and allows you to use a legend for labeling the fieldset.

### Key Features:
- **Legend Support**: Provides an optional legend with configurable alignment, size, and boldness.
- **Form Grouping**: Enhances accessibility by grouping related form elements under a fieldset.
- **Customizable Layout**: Adjust the spacing between form elements, show or hide borders, and control whether the fieldset is disabled.
- **Flexible Styles**: Control legend alignment, size, and text boldness for better visual clarity.

### Import:
\`\`\`tsx
import { Fieldset } from '@smitch/breeze'
\`\`\`

### Usage Example:
\`\`\`tsx
<Fieldset
  legendText="Contact Details"
  legendAlign="center"
  legendSize="lg"
  hasBorder={true}
  isBold={true}
  spacing="4"
>
  {form elements here}
</Fieldset>
\`\`\`
 `,
      },
      /* source: {
				code: `import { Fieldset } from './ui'

const ExampleForm = () => {
  return (
    <form>
      <Fieldset
        legendText="Contact Details"
        legendAlign="center"
        legendSize="lg"
        hasBorder={true}
        isBold={true}
        spacing="4"
      >
        {children form elements}
      </Fieldset>
    </form>
  );
};

export default ExampleForm;
`,
			}, */
    },
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Fieldset>;

export default meta;
type Story = StoryObj<typeof meta>;

const onInputChange = (value: string) => {
  console.log("onInputChange", value);
};

const defaultContent = () => {
  return (
    <>
      <TextInput
        label="First Name"
        autocomplete="given-name"
        layout="row"
        onInputChange={onInputChange}
        placeholder="Your first name"
        required
        name="given-name"
        id="given-name"
      />
      <TextInput
        label="Last Name"
        autocomplete="family-name"
        layout="row"
        onInputChange={onInputChange}
        placeholder="Your last name"
        required
        name="family-name"
        id="family-name"
      />
      <TextInput
        label="e-Mail"
        type="email"
        autocomplete="email"
        layout="row"
        onInputChange={onInputChange}
        name="email"
        id="email"
        placeholder="Your e-Mail"
        title="Enter a valid e-mail address"
        hint
        required
      />
      <TextInput
        name="telNo"
        id="telNo"
        label="Mobile No"
        autocomplete="tel"
        layout="row"
        onInputChange={onInputChange}
        placeholder="eg: 07123456789"
        title="Enter a vaild UK mobile number"
        hint
        pattern="^(\+44\s?|0)7\d{9}$"
      />
    </>
  );
};

export const Default: Story = {
  name: "Fieldset",
  args: {
    legendText: "Contact Details",
    legendSize: "xl",
    hasBorder: true,
    isBold: true,
    legendAlign: "center",
    spacing: "4",
    className: "bg-light/50 dark:bg-dark/50",
    children: defaultContent(),
  },
};
