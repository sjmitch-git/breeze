import React from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Form, Fieldset } from "..";
import {
  TextInput,
  Autocomplete,
  SearchInput,
  Select,
  PasswordInput,
  Checkbox,
} from "../..";
import { Default as Password } from "../../passwordinput/stories/PasswordInput.stories";
import data from "../../../data/countries.json";

const passwordPattern = "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}";

const handleSubmit = (data: { [key: string]: string }) => {
  console.log("form data", data);
};

const meta: Meta<typeof Form> = {
  title: "Forms/Form",
  component: Form,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="max-w-md mx-auto">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    enctype: {
      table: {
        disable: true,
      },
    },
    actions: {
      table: {
        disable: true,
      },
    },
    onsubmit: {
      table: {
        disable: true,
      },
    },
    onCancel: {
      table: {
        disable: true,
      },
    },
    action: {
      table: {
        disable: true,
      },
    },
    method: {
      table: {
        disable: true,
      },
    },
    name: {
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
    buttonShape: "default",
    buttonTextcase: "normal-case",
    submitColor: "light",
    className: "",
  },
  parameters: {
    docs: {
      description: {
        component: `
The **Form** component is used to create structured, flexible forms that allow users to input data. It supports various layouts, action buttons, and customization for submit and cancel actions.

### Key Features:
- **Flexible Layout**: Supports both column and row layouts.
- **Action Buttons**: Customizable submit and cancel buttons with optional layouts.
- **Customizable Styling**: Easily control button styles, text case, button shape, and form alignment.
- **Form Validation**: Tracks form validity and disables submit when form is invalid.

### Import:
\`\`\`tsx
import { Form } from '@smitch/fluid'
\`\`\`

### Usage Example:
\`\`\`tsx
<Form
  onsubmit={handleSubmit}
  actions={true}
  showCancel={true}
  submitLabel="Submit"
  cancelLabel="Cancel"
>
  {form elements here}
</Form>
\`\`\`
`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const onInputChange = (value: string) => {
  console.log("onInputChange", value);
};

const onSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  console.log("Search Category", event.target.value);
};

const onButtonSubmit = (value: string) => {
  console.log("Search Query", value);
};

const onFormCancel = () => {
  console.log("onFormCancel");
};

const contactContent = () => {
  return (
    <Fieldset legendText="Contact" legendSize="xl" spacing="8">
      <TextInput
        label="Name"
        autocomplete="name"
        layout="row"
        name="name"
        id="name"
        required
      />
      <TextInput
        label="e-Mail"
        autocomplete="email"
        layout="row"
        name="email"
        id="email"
        placeholder="myname@email.com"
        hint={true}
        title="Enter a vaild e-Mail address"
        required
      />
      <TextInput
        label="Mobile"
        autocomplete="tel"
        layout="row"
        name="tel"
        id="tel"
        placeholder="07123456789"
        hint={true}
        title="Enter a vaild UK mobile number"
        pattern="^(+44s?7d{3}|(?07d{3})?)s?d{3}s?d{3}$"
      />
    </Fieldset>
  );
};

export const ContactForm: Story = {
  args: {
    name: "contact-form",
    children: contactContent(),
    actionsLayout: "row",
    actionsSpacing: "0",
    onCancel: onFormCancel,
    onsubmit: handleSubmit,
    showCancel: true,
    submitBackground: "primary",
    cancelBackground: "transparent",
    cancelColor: "current",
    separator: true,
  },
};

const options = ["All", "Books", "Home", "Sports", "Toys"];

const searchOptions = () => {
  return (
    <Select
      options={options}
      onChange={onSelectChange}
      className="!border-0 focus:border-neutral focus:ring-0 focus:ring-transparent !bg-neutral !text-dark"
    />
  );
};

const searchContent = () => {
  return (
    <SearchInput
      onButtonSubmit={onButtonSubmit}
      label="Search"
      icon={true}
      size="md"
      inputStyles="border-0 focus:ring-0 focus:ring-transparent"
      btnShape="square"
      btnBackground="primary"
      btnColor="light"
      autocomplete="on"
      placeholder="Search this site"
      autocorrect="on"
      spacing="0"
      rounded="none"
      className="flex-grow"
    />
  );
};

const AddressContent = () => {
  return (
    <Fieldset legendText="Address" legendSize="xl">
      <TextInput
        label="Street"
        autocomplete="address-line1"
        layout="row"
        name="address-line1"
        id="address-line1"
        required
      />
      <TextInput
        label="Town/City"
        autocomplete="address-level2"
        layout="row"
        name="address-line2"
        id="address-line2"
        required
      />
      <TextInput
        label="County"
        autocomplete="address-level1"
        layout="row"
        name="address-line3"
        id="address-line3"
        required
      />
      <Autocomplete
        data={data}
        list="countries"
        placeholder="Select Country"
        autocomplete="country-name"
        label="Country"
        layout="row"
        required
      />
      <TextInput
        label="Post Code"
        autocomplete="postal-code"
        layout="row"
        name="postal-code"
        id="postal-code"
        inputStyles="max-w-[10em] border-neutral"
        required
      />
    </Fieldset>
  );
};

const NewsletterContent = () => {
  return (
    <Fieldset
      legendText="Sign-up for our newsletter?"
      legendSize="md"
      legendAlign="left"
      spacing="4"
      className="flex-col md:flex-row flex-grow"
    >
      <TextInput
        label="Name"
        autocomplete="name"
        layout="col"
        name="name"
        id="name"
        required
      />
      <TextInput
        label="e-Mail"
        autocomplete="email"
        layout="col"
        name="email"
        id="email"
        placeholder="myname@email.com"
        hint={false}
        title="Enter a vaild e-Mail address"
        required
      />
    </Fieldset>
  );
};

const loginContent = () => {
  return (
    <>
      <Fieldset legendText="Log-in" legendSize="xl" spacing="8" isBold={true}>
        <TextInput
          label="User Name"
          autocomplete="username"
          name="username"
          id="username"
          placeholder="User Name or e-Mail"
          required
        />
        <PasswordInput {...Password.args} label="Password" />
        <p className="psw group-valid:hidden">
          Forgot <a href="#">password?</a>
        </p>
        <Checkbox
          label="Remember me"
          name="remember"
          className="group-invalid:hidden"
        />
      </Fieldset>
    </>
  );
};

export const LoginForm: Story = {
  args: {
    children: loginContent(),
    actionsLayout: "row",
    actionsSpacing: "0",
    onCancel: onFormCancel,
    onsubmit: handleSubmit,
    showCancel: true,
    submitLabel: "Log-in",
    submitBackground: "primary",
    cancelBackground: "transparent",
    cancelColor: "current",
    separator: true,
    name: "login",
  },
};

export const AddressForm: Story = {
  args: {
    onsubmit: handleSubmit,
    children: AddressContent(),
    actionsLayout: "row",
    actionsSpacing: "0",
    buttonIsBold: true,
    buttonTextcase: "uppercase",
    name: "address-form",
  },
};

export const NewsletterForm: Story = {
  args: {
    onsubmit: handleSubmit,
    children: NewsletterContent(),
    layout: "row",
    actionsLayout: "row",
    actionsSpacing: "0",
    submitLabel: "Sign-up",
    submitColor: "light",
    buttonIsBold: true,
    name: "newsletter-form",
  },
};

export const SearchForm: Story = {
  argTypes: {
    name: {
      table: {
        disable: true,
      },
    },
    onCancel: {
      table: {
        disable: true,
      },
    },
    showCancel: {
      table: {
        disable: true,
      },
    },
    separator: {
      table: {
        disable: true,
      },
    },
    submitLabel: {
      table: {
        disable: true,
      },
    },
    cancelLabel: {
      table: {
        disable: true,
      },
    },
    submitBackground: {
      table: {
        disable: true,
      },
    },
    submitColor: {
      table: {
        disable: true,
      },
    },
    submitOutlineColor: {
      table: {
        disable: true,
      },
    },
    cancelBackground: {
      table: {
        disable: true,
      },
    },
    cancelColor: {
      table: {
        disable: true,
      },
    },
    submitOutline: {
      table: {
        disable: true,
      },
    },
    cancelOutline: {
      table: {
        disable: true,
      },
    },
    cancelOutlineColor: {
      table: {
        disable: true,
      },
    },
    buttonTextcase: {
      table: {
        disable: true,
      },
    },
    buttonIsBold: {
      table: {
        disable: true,
      },
    },
    actions: {
      table: {
        disable: true,
      },
    },
    actionsLayout: {
      table: {
        disable: true,
      },
    },
    actionsSpacing: {
      table: {
        disable: true,
      },
    },
    buttonShape: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    children: searchContent(),
    actions: false,
    className:
      "flex !flex-row !gap-0 border border-neutral focus-within:border-accent",
  },
};

export const SearchWithOptions: Story = {
  argTypes: {
    ...SearchForm.argTypes,
  },
  args: {
    ...SearchForm.args,
    children: (
      <>
        {searchOptions()} {searchContent()}
      </>
    ),
  },
};
