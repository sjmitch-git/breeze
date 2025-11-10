import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Label } from "..";
import { Input, Select } from "../..";
import { LabelProps } from "../types";

const textInputExample = `<Label label="Label:" layout="col">
  <Input type="text" name="name" placeholder="Placeholder Text" />
</Label>`;

const emailInputExample = `<Label label="e-Mail:" layout="col" required>
  <Input
  	type='email'
	placeholder='Enter your email'
	required
	hint
	title='A valid e-mail address is required.'
	autocomplete='email'
  />
</Label>`;

const passwordInputExample = `<Label label="Password:" layout="col" required>
  <Input
	type='password'
	name='password'
	autocomplete='current-password'
	pattern='(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}'
	placeholder='Enter Password'
	hint
	title='Must contain at least one number and one uppercase and lowercase letter, and between 8 and 12 characters'
	required
/>
</Label>`;

const meta: Meta = {
  title: "Forms/Label",
  component: Label,
  decorators: [
    (Story) => (
      <div className="max-w-md mx-auto">
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      source: {
        code: textInputExample,
      },
      description: {
        component: `
The **Label** component wraps form elements like inputs, providing a label and layout options.

### Import
\`\`\`tsx
import { Label } from '@smitch/fluid'
\`\`\`

### Example Usage:
\`\`\`tsx
// Text Input Example
${textInputExample}
\`\`\`

\`\`\`tsx
// Email Input Example
${emailInputExample}
\`\`\`
`,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof Label>;

const LabelComponent = (args: LabelProps) => (
  <Label {...args}>{args.children}</Label>
);

export const Default: Story = {
  name: "Text Input",
  render: (args) => (
    <LabelComponent {...args}>
      <Input
        size={args.size}
        type="text"
        placeholder="Placeholder Text"
        required={args.required}
      />
    </LabelComponent>
  ),
  argTypes: {
    children: { table: { disable: true } },
    type: { table: { disable: true } },
    forId: { table: { disable: true } },
    value: { table: { disable: true } },
    onKeyUp: { table: { disable: true } },
    layout: {
      options: ["col", "row"],
      control: { type: "radio" },
    },
  },
  args: {
    label: "Label:",
    layout: "col",
    size: "md",
    isBold: true,
  },
};

export const EmailInput: Story = {
  parameters: {
    docs: {
      source: {
        code: `${emailInputExample}`,
      },
    },
  },
  render: (args) => (
    <LabelComponent {...args}>
      <Input
        size={args.size}
        type="email"
        name="email"
        placeholder="Enter your email"
        required={args.required}
        hint
        title="A valid e-mail address is required."
        autocomplete="email"
      />
    </LabelComponent>
  ),
  argTypes: {
    ...Default.argTypes,
  },
  args: {
    ...Default.args,
    label: "e-Mail:",
    required: true,
  },
};

const passwordPattern = "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}";

export const PasswordInput: Story = {
  parameters: {
    docs: {
      source: {
        code: `${passwordInputExample}`,
      },
    },
  },
  render: (args) => (
    <LabelComponent {...args}>
      <Input
        size={args.size}
        type="password"
        name="password"
        autocomplete="current-password"
        pattern={passwordPattern}
        placeholder="Enter Password"
        hint
        title="Must contain at least one number and one uppercase and lowercase letter, and between 8 and 12 characters"
        required={args.required}
      />
    </LabelComponent>
  ),
  argTypes: {
    ...Default.argTypes,
  },
  args: {
    ...Default.args,
    label: "Password:",
    required: true,
  },
};

const checkboxInputExample = `<Label label='I agree to Terms & Conditions' type='checkbox' layout='row_reverse'>
	<Input
		name='terms'
		type='checkbox'
	/>
</Label>`;

export const CheckboxInput: Story = {
  parameters: {
    docs: {
      source: {
        code: `${checkboxInputExample}`,
      },
    },
  },
  render: (args) => (
    <LabelComponent {...args}>
      <Input
        size={args.size}
        type="checkbox"
        name="terms"
        hint={false}
        title={args.label?.toString()}
        required={args.required}
      />
    </LabelComponent>
  ),
  argTypes: {
    ...Default.argTypes,
    layout: { table: { disable: true } },
  },
  args: {
    ...Default.args,
    label: "I agree to Terms & Conditions",
    type: "checkbox",
    layout: "row_reverse",
    isBold: false,
  },
};

const radioInputExample = `<Label label='18-64 years' type='radio' layout='row_reverse'>
	<Input
		name='age'
		type='radio'
		value='age'
	/>
</Label>`;

export const RadioInput: Story = {
  parameters: {
    docs: {
      source: {
        code: `${radioInputExample}`,
      },
    },
  },
  render: (args) => (
    <LabelComponent {...args}>
      <Input
        size={args.size}
        type="checkbox"
        name="terms"
        hint={false}
        title={args.label?.toString()}
        required={args.required}
      />
    </LabelComponent>
  ),
  argTypes: {
    ...Default.argTypes,
    layout: { table: { disable: true } },
  },
  args: {
    ...Default.args,
    label: "18 - 64 years",
    type: "radio",
    layout: "row_reverse",
    isBold: false,
  },
};

const colorInputExample = `<Label label='Set Color' type='color' layout='row_reverse'>
	<Input
		name='color'
		type='color'
		value='#FF00FF'
		onChange={handleChange}
	/>
</Label>`;

export const ColorInput: Story = {
  render: (args: LabelProps) => {
    const [value, setValue] = useState(args.value);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    };

    return (
      <Label {...args} label={`${args.label}: ${value}`}>
        <Input
          type="color"
          name="color"
          size={args.size}
          value={value}
          onChange={handleChange}
        />
      </Label>
    );
  },

  args: {
    type: "color",
    layout: "row_reverse",
    label: "Set Colour",
    size: "md",
    value: "#FF00FF",
  },

  parameters: {
    docs: {
      source: {
        code: `${colorInputExample}`,
      },
    },
  },
};

const dataInputExample = `<Label label='Select Date:' type='date' layout='col'>
  <Input
  	type='date'
	name='date'
  />
</Label>`;

interface TypeProps {
  type: "date" | "datetime-local" | "time" | "month" | "week";
}

export const DatesAndTimeInput: Story = {
  parameters: {
    docs: {
      source: {
        code: `${dataInputExample}`,
      },
    },
  },
  render: (args) => (
    <LabelComponent {...args}>
      <Input
        size={args.size}
        type={args.type as TypeProps["type"]}
        name="date"
      />
    </LabelComponent>
  ),
  argTypes: {
    ...Default.argTypes,
    type: {
      control: "select",
      options: ["date", "datetime-local", "month", "week", "time"],
      table: {
        disable: false,
      },
    },
    required: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    ...Default.args,
    type: "date",
    label: "Enter Value:",
  },
};

const urlInputExample = `<Label label='Blog Link:' type='url' layout='col'>
  <Input
  	type='url'
	name='url'
	hint
	title='Link to your blog, if you have one.'
	autocomplete='url'
  />
</Label>`;

export const UrlInput: Story = {
  name: "URL Input",
  parameters: {
    docs: {
      source: {
        code: `${urlInputExample}`,
      },
    },
  },
  render: (args) => (
    <LabelComponent {...args}>
      <Input
        size={args.size}
        type="url"
        name="url"
        placeholder="HTTPS://"
        hint
        title="Link to your blog, if you have one."
        autocomplete="url"
      />
    </LabelComponent>
  ),
  argTypes: {
    ...Default.argTypes,
    required: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    ...Default.args,
    label: "Blog Link:",
    type: "url",
  },
};

const numberInputExample = `<Label label='Number:' type='number' layout='col'>
  <Input
  	name='number'
	type='number'
	value='1'
	min='1'
	max='9'
	hint
	title='Enter a value between 1 and 9'
	required
  />
</Label>`;

export const NumberInput: Story = {
  parameters: {
    docs: {
      source: {
        code: `${numberInputExample}`,
      },
    },
  },
  render: (args) => (
    <LabelComponent {...args}>
      <Input
        size={args.size}
        name="number"
        type="number"
        value="1"
        min="1"
        max="9"
        hint
        title="Enter a value between 1 and 9"
        required={args.required}
      />
    </LabelComponent>
  ),
  argTypes: {
    ...Default.argTypes,
    required: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    ...Default.args,
    label: "Number:",
    type: "number",
  },
};

const telInputExample = `<Label label='Mobile:' type='tel' layout='col'>
  <Input
  	name='mobile'
	type='tel'
	hint
	autocomplete='tel'
	title='Enter a vaild UK mobile number'
	pattern='^(+44s?7d{3}|(?07d{3})?)s?d{3}s?d{3}$'
	placeholder='eg: 07111 222333'
  />
</Label>`;

export const TelephoneInput: Story = {
  parameters: {
    docs: {
      source: {
        code: `${telInputExample}`,
      },
    },
  },
  render: (args) => (
    <LabelComponent {...args}>
      <Input
        size={args.size}
        name="mobile"
        type="tel"
        hint
        autocomplete="tel"
        title="Enter a vaild UK mobile number"
        pattern="^(+44s?7d{3}|(?07d{3})?)s?d{3}s?d{3}$"
        placeholder="eg: 07111 222333"
        required={args.required}
      />
    </LabelComponent>
  ),
  argTypes: {
    ...Default.argTypes,
  },
  args: {
    ...Default.args,
    label: "Mobile:",
    type: "tel",
    required: false,
  },
};

const searchInputExample = `<Label label='Search:' type='search' layout='row'>
  <Input
  	name='search'
	type='search'
	autocomplete='on'
  />
</Label>`;

export const SearchInput: Story = {
  parameters: {
    docs: {
      source: {
        code: `${searchInputExample}`,
      },
    },
  },
  render: (args) => (
    <LabelComponent {...args}>
      <Input size={args.size} name="search" type="search" autocomplete="on" />
    </LabelComponent>
  ),
  argTypes: {
    ...Default.argTypes,
    required: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    ...Default.args,
    label: "Search:",
    type: "search",
    layout: "row",
  },
};

const fileInputExample = `<Label label='Upload an image' type='file'>
  <Input
  	label='Upload an image'
	name='file'
	type='file'
	accept='image/*'
  />
</Label>`;

export const FileInput: Story = {
  parameters: {
    docs: {
      source: {
        code: `${fileInputExample}`,
      },
    },
  },
  render: (args) => (
    <LabelComponent {...args}>
      <Input size={args.size} name="file" type="file" accept="image/*" />
    </LabelComponent>
  ),
  argTypes: {
    ...Default.argTypes,
    required: {
      table: {
        disable: true,
      },
    },
    layout: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    ...Default.args,
    label: "Upload an image",
    type: "file",
    layout: "col",
  },
};

const months = [
  { value: "01", label: "January" },
  { value: "02", label: "February" },
  { value: "03", label: "March" },
  { value: "04", label: "April" },
  { value: "05", label: "May" },
  { value: "06", label: "June" },
  { value: "07", label: "July" },
  { value: "08", label: "August" },
  { value: "09", label: "September" },
  { value: "10", label: "October" },
  { value: "11", label: "November" },
  { value: "12", label: "December" },
];

const selectDropdowntExample = `<Label label='Month:' size='md' layout='col'>
  <Select
	options={[
		{ value: '01', label: 'January' },
		{ value: '02', label: 'February' },
		{ value: '03', label: 'March' },
	]}
	name='months'
	dropdownSize='md'
/>
</Label>`;

export const SelectDropdown: Story = {
  parameters: {
    docs: {
      source: {
        code: `${selectDropdowntExample}`,
      },
    },
  },
  render: (args) => (
    <LabelComponent {...args}>
      <Select
        options={months}
        name="months"
        required={args.required}
        dropdownSize={args.size}
      />
    </LabelComponent>
  ),
  argTypes: {
    ...Default.argTypes,
    required: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    ...Default.args,
    label: "Month:",
    layout: "col",
  },
};
