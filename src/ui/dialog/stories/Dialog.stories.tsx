import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Dialog } from "..";
import { DialogProps } from "../types";
import { Tabs, Form, RegisterForm } from "../..";
import { LoginForm } from "../../form/stories/Form.stories";
import { Default as Register } from "../../form/stories/RegisterForm.stories";

const codeExample = `<Dialog
  open={isOpen}
  modal={false}
  title="Dialog Title"
  titleSize="lg"
  titleBold={true}
  onClose={() => console.log('Dialog closed')}
>
  <p>A simple dialog message!</p>
</Dialog>`;

const modalExample = `<Dialog
  open={isOpen}
  modal={true}
  title="Log-in to your account"
  titleSize="lg"
  titleBold={true}
  onClose={() => console.log('Dialog closed')}
>
  	<Tabs
		tabSize='md'
		minimalTabs={true}
		contentBorder={false}
		defaultActiveId='tab1'
	>
		<div
			id='tab1'
			title='Log-in'
		>
			<div>
				{
					<Form
						{...LoginForm.args}
						onCancel={handleClose}
						onsubmit={handleSubmit}
					/>
				}
			</div>
		</div>
		<div
			id='tab2'
			title='Register'
		>
			<div>
				{
					<RegisterForm
						{...Register.args}
						legendText='Register'
						userLabel='e-Mail'
						passwordLabel='Password'
						confirmLabel='Confirm'
						checkLabel='Terms & Conditions'
						onCancel={handleClose}
						onsubmit={handleSubmit}
					/>
				}
			</div>
		</div>
	</Tabs>
</Dialog>`;

const meta: Meta = {
  title: "Feedback/Dialog",
  component: Dialog,
  parameters: {
    docs: {
      source: {
        code: codeExample,
      },
      description: {
        component: `
The **Dialog** component displays a modal or non-modal dialog box with customizable content. It can be used to create a prompt or notification that the user needs to respond to.

## Key Features:
- **Modal or Non-Modal**: Supports both modal (blocks background interaction) and non-modal dialogs, controlled via the \`modal\` prop.
- **Customizable Title**: Configurable dialog title with adjustable size (\`'sm' | 'md' | 'lg' | 'xl'\`) and bold styling via the \`titleSize\` and \`titleBold\` props.
- **Content Flexibility**: Accepts any content inside the dialog, including simple text, forms, or complex components.
- **Tabbed Interface**: Easily integrates with the \`Tabs\` component to provide a tabbed dialog for switching between different sections, such as login and registration forms.
- **Form Integration**: Supports embedded forms with dynamic behavior using components like \`Form\` and \`RegisterForm\`, along with handling submit and cancel actions.
- **Dynamic Visibility Control**: Manages open/close state with React's \`useState\` hook, allowing for controlled visibility.
- **Close Callback**: Executes a customizable \`onClose\` callback function when the dialog is closed, useful for logging or form handling.

### Import
\`\`\`tsx
import { Dialog } from '@smitch/breeze'
\`\`\`

### Example Usage:
\`\`\`tsx
// simple dialog
${codeExample}
\`\`\`
`,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Dialog>;

export default meta;

type Story = StoryObj<typeof Dialog>;

const DialogComponent = (args: DialogProps) => {
  const [open, setOpen] = useState(args.open);

  const handleClose = () => {
    setOpen(false);
    if (args.onClose) args.onClose();
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Open Dialog
      </button>
      <Dialog {...args} open={open} onClose={handleClose}>
        {args.children || <p>A simple dialog message!</p>}
      </Dialog>
    </>
  );
};

export const SimpleDialog: Story = {
  render: (args) => <DialogComponent {...args} />,
  args: {
    title: "Dialog Title",
    titleSize: "lg",
    titleBold: true,
    open: false,
    modal: false,
    onClose: () => console.log("Dialog closed"),
  },
};

SimpleDialog.argTypes = {
  submit: {
    table: {
      disable: true,
    },
  },
  onClose: {
    table: {
      disable: true,
    },
  },
  open: {
    table: {
      disable: true,
    },
  },
  modal: {
    table: {
      disable: true,
    },
  },
  showClose: {
    table: {
      disable: true,
    },
  },
};

const ModalDialogComponent = (args: DialogProps) => {
  const [open, setOpen] = useState(args.open);

  const handleClose = () => {
    setOpen(false);
    if (args.onClose) args.onClose();
  };

  const handleSubmit = (data: { [key: string]: string }) => {
    console.log("form data", data);
    handleClose();
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="bg-blue-800 font-semibold text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Log-in
      </button>
      <Dialog {...args} open={open} onClose={handleClose}>
        <Tabs
          tabSize="md"
          minimalTabs={true}
          contentBorder={false}
          defaultActiveId="tab1"
          className="px-4"
        >
          <div id="tab1" data-title="Log-in">
            <div className="py-4">
              {<Form {...LoginForm.args} onCancel={handleClose} onFormSubmit={handleSubmit} />}
            </div>
          </div>
          <div id="tab2" data-title="Register">
            <div className="py-4">
              {
                <RegisterForm
                  {...Register.args}
                  legendText="Register"
                  userLabel="e-Mail"
                  passwordLabel="Password"
                  confirmLabel="Confirm"
                  checkLabel="Terms & Conditions"
                  onCancel={handleClose}
                  onFormSubmit={handleSubmit}
                />
              }
            </div>
          </div>
        </Tabs>
      </Dialog>
    </>
  );
};

export const ModalDialog: Story = {
  parameters: {
    docs: {
      source: {
        code: `${modalExample}`,
      },
    },
  },
  render: (args) => <ModalDialogComponent {...args} />,
  args: {
    title: "Log-in to your account",
    titleSize: "lg",
    titleBold: true,
    open: false,
    modal: true,
    onClose: () => console.log("Dialog closed"),
    closeBtnSize: "md",
  },
};

ModalDialog.argTypes = {
  ...SimpleDialog.argTypes,
  /* onClose: {
		table: {
			disable: false,
		},
	}, */
};
