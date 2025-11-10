import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FaUser } from "react-icons/fa";
import { NavBar } from "..";
import { Button, Dialog, Tabs, Form, RegisterForm } from "../..";
import { LoginForm } from "../../form/stories/Form.stories";
import { Default as Register } from "../../form/stories/RegisterForm.stories";
import { NavBarProps } from "../types";

const codeExample = `<NavBar
  brand="My Brand"
  brandSrc: "/brand.png",
  links={[
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]}
  className="bg-blue-500"
/>`;

const meta: Meta<typeof NavBar> = {
  title: "Menus/NavBar",
  component: NavBar,
  parameters: {
    docs: {
      description: {
        component: `
The **NavBar** component is a customizable navigation bar for your web application.

### Key Features:
- Supports dynamic links and brand text/logo.
- Customizable appearance via Tailwind classes or additional CSS.
- Includes link click callback support for handling navigation events.

### Import
\`\`\`tsx
import { NavBar } from '@smitch/fluid'
\`\`\`

### Example Usage:
\`\`\`jsx
<NavBar
  brand="My Brand"
  links={[
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]}
  className="bg-blue-500"
/>
\`\`\`
                `,
      },
      source: {
        code: codeExample,
      },
    },
  },
  /* argTypes: {
		brand: {
			description: 'The text or logo displayed as the brand.',
			control: 'text',
		},
		links: {
			description: 'Array of navigation links.',
			control: 'object',
		},
		navStyles: {
			description: 'Additional CSS classes for styling.',
			control: 'text',
		},
		onLinkClick: {
			action: 'link clicked',
			description: 'Callback function triggered on link click.',
		},
	}, */
  tags: ["autodocs"],
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof NavBar>;

const NavBarComponent = (args: NavBarProps) => <NavBar {...args} />;

const ExampleContent = () => {
  return (
    <article className="p-4 mb-12 max-w-prose mx-auto">
      <h1 className="font-semibold text-4xl mb-4">Page Example</h1>
      <p className="mb-8">
        Bacon ipsum dolor amet pork loin excepteur pork, jerky ground round
        shank burgdoggen strip steak kielbasa biltong cupim aliquip dolore.
        Tongue meatball in enim cow consectetur. Tenderloin veniam meatball
        chuck consequat, pork belly duis nostrud magna do culpa cupim pig shank
        ut. Doner cupim nisi swine, jowl reprehenderit dolor ipsum chislic
        meatball lorem corned beef turducken sausage.
      </p>
      <h2 className="font-semibold text-3xl mb-4">More Content</h2>
      <p className="mb-4">
        Picanha cupim buffalo tongue shoulder laborum consectetur nostrud aute
        turkey. Beef ribs voluptate fatback elit. Non pork chop exercitation,
        frankfurter brisket cillum dolore ham hock capicola chuck cupim ea. Ex
        in deserunt ad. Shankle dolor occaecat, nulla adipisicing ham lorem jowl
        laboris short loin anim fugiat ut. Voluptate beef ribs ipsum, ut brisket
        leberkas ullamco landjaeger. Bresaola drumstick et fatback meatball qui
        lorem nisi pariatur fugiat turkey occaecat non reprehenderit nostrud.
      </p>
      <h2 className="font-semibold text-3xl mb-4">Some More Content</h2>
      <p className="mb-4">
        Picanha cupim buffalo tongue shoulder laborum consectetur nostrud aute
        turkey. Beef ribs voluptate fatback elit. Non pork chop exercitation,
        frankfurter brisket cillum dolore ham hock capicola chuck cupim ea. Ex
        in deserunt ad. Shankle dolor occaecat, nulla adipisicing ham lorem jowl
        laboris short loin anim fugiat ut. Voluptate beef ribs ipsum, ut brisket
        leberkas ullamco landjaeger. Bresaola drumstick et fatback meatball qui
        lorem nisi pariatur fugiat turkey occaecat non reprehenderit nostrud.
      </p>
    </article>
  );
};

export const Default: Story = {
  name: "Basic",
  parameters: {
    docs: {
      source: {
        code: codeExample,
      },
    },
  },
  render: (args) => (
    <div className="relative -top-4 -left-0 dark:text-light dark:bg-dark">
      <NavBarComponent {...args} />
      <ExampleContent />
    </div>
  ),
  args: {
    placement: "top",
    brand: "My Brand",
    brandSrc: "/brand.png",
    brandStyles: "",
    btnBackground: "info",
    btnColor: "light",
    btnLayout: "square",
    btnSize: "lg",
    links: [
      { name: "Home", href: "#" },
      { name: "About", href: "#" },
      { name: "Contact", href: "#" },
    ],
    navStyles: "bg-slate-300 dark:bg-slate-700",
  },
};

Default.argTypes = {
  brand: {
    control: "text",
  },
  links: {
    control: "object",
  },
  navStyles: {
    control: "text",
  },
};

export const WithLogin: Story = {
  parameters: {
    docs: {
      source: {
        code: codeExample,
      },
    },
  },
  render: (args) => (
    <div className="relative -top-4 -left-0">
      <NavBarWithLogin {...args} />
      <ExampleContent />
    </div>
  ),
  args: {
    placement: "top",
    brand: "My Brand",
    brandSrc: "/brand.png",
    brandStyles: "",
    btnBackground: "dark",
    btnColor: "light",
    btnLayout: "circle",
    btnSize: "lg",
    links: [
      { name: "Home", href: "#" },
      { name: "About", href: "#" },
      { name: "Contact", href: "#" },
    ],
    navStyles: "bg-slate-300 dark:bg-slate-700",
  },
};

const NavBarWithLogin = (args: NavBarProps) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  return (
    <NavBarComponent {...args}>
      <Button
        btnBackground={args.btnBackground}
        layout={args.btnLayout}
        size={args.btnSize}
        btnColor={args.btnColor}
        onClick={() => setOpen(!open)}
        title="Your Account"
      >
        <FaUser />
      </Button>
      <Dialog
        open={open}
        modal={true}
        title="Your Account"
        onClose={handleClose}
      >
        <Tabs
          tabSize="md"
          minimalTabs={true}
          contentBorder={false}
          defaultActiveId="tab1"
          className="px-0"
        >
          <div id="tab1" data-title="Log-in">
            <div>
              <Form
                {...LoginForm.args}
                onCancel={handleClose}
                onsubmit={handleClose}
                className="p-4"
              />
            </div>
          </div>
          <div id="tab2" data-title="Register">
            <div>
              <RegisterForm
                {...Register.args}
                legendText="Register"
                userLabel="e-Mail"
                passwordLabel="Password"
                confirmLabel="Confirm"
                checkLabel="Terms & Conditions"
                onCancel={handleClose}
                onsubmit={handleClose}
                className="p-4"
              />
            </div>
          </div>
        </Tabs>
      </Dialog>
    </NavBarComponent>
  );
};

Default.decorators = [
  (Story) => (
    <div className="-mx-4">
      <Story />
    </div>
  ),
];

WithLogin.decorators = [
  (Story) => (
    <div className="-mx-4">
      <Story />
    </div>
  ),
];
