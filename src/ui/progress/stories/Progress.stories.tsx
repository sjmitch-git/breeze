import { useEffect, useState } from "react";
import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Progress } from "..";
import { Dialog } from "../..";

const codeExample = `<Progress
	totalSize={245}   // Size of data
	downloadedSize={0} // Currently downloaded size in MB
	doneMessage="Download complete!"
	unit="mb" // Unit of measurement (kb, mb, gb)
/>`;

const modalExample = `<Dialog
	title='Downloading'
	open={isOpen}
	modal={true}
	onClose={handleClose}
>
	<div className='pb-4 px-4'>
		<Progress
			{...args}
			downloadedSize={downloadedSize}
			onDone={handleOnDone}
		/>
	</div>
</Dialog>`;

const meta: Meta<typeof Progress> = {
  title: "Feedback/Progress",
  component: Progress,
  parameters: {
    docs: {
      source: {
        code: codeExample,
      },

      description: {
        component: `
The **Progress** component represents a progress bar, which can be used to indicate the completion percentage of a task, such as downloading or uploading data.

### Import
\`\`\`tsx
// simple progress
import { Progress } from '@smitch/fluid'
\`\`\`

\`\`\`tsx
// modal progress
import { Progress, Dialog } from '@smitch/fluid'
\`\`\`

### Example Usage:
\`\`\`tsx
// simple progress
${codeExample}
\`\`\`

\`\`\`tsx
// modal progress
${modalExample}
\`\`\`

### Key Features:
- The component dynamically updates the progress value based on the \`downloadedSize\` and \`totalSize\` props.
- It can display a custom completion message using the \`doneMessage\` prop when the task is finished.
- You can customize the appearance using Tailwind CSS via the \`className\` props. (However, progress element styling is quite limited).
`,
      },
    },
  },
  argTypes: {
    totalSize: { control: { type: "number", min: 0 } },
    className: { control: "text" },
    id: {
      table: {
        disable: true,
      },
    },
    onDone: {
      table: {
        disable: true,
      },
    },
    downloadedSize: {
      table: {
        disable: true,
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Progress>;

const ProgressComponent = (args: {
  totalSize: number;
  onDone?: () => void;
}) => {
  const [downloadedSize, setDownloadedSize] = useState(0);
  const [isCancelled, setIsCancelled] = useState(false);

  const handleDone = () => {
    if (args.onDone) args.onDone();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDownloadedSize((prev) => {
        if (prev >= args.totalSize) {
          clearInterval(interval);
          return args.totalSize;
        }
        return prev + 5;
      });
    }, 100);

    if (isCancelled) {
      clearInterval(interval);
      return;
    }

    return () => clearInterval(interval);
  }, [args.totalSize, isCancelled]);

  return (
    <Progress {...args} downloadedSize={downloadedSize} onDone={handleDone} />
  );
};

export const SimpleProgress: Story = {
  render: (args) => <ProgressComponent {...args} />,
  decorators: [
    (Story) => (
      <div className="p-8 max-w-prose mx-auto">
        <Story />
      </div>
    ),
  ],
  args: {
    id: "progress-demo",
    totalSize: 245,
    unit: "mb",
    doneMessage: "Download complete!",
    feedbackClasses: "dark:text-light",
  },
  argTypes: {
    doneMessage: {
      table: {
        disable: true,
      },
    },
  },
};

const ModalProgressComponent = (args: {
  totalSize: number;
  downloadedSize: number;
  onDone?: () => void;
  doneMessage?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [downloadedSize, setDownloadedSize] = useState(0);
  const [title, setTitle] = useState<string>("Downloading");

  useEffect(() => {
    const interval = setInterval(() => {
      setDownloadedSize((prev) => {
        if (prev >= args.totalSize) {
          clearInterval(interval);
          return args.totalSize;
        }
        return prev + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [args.totalSize]);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOnDone = () => {
    if (args.doneMessage) setTitle(args.doneMessage);
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Download
      </button>

      {isOpen && (
        <Dialog
          title={title}
          titleSize="lg"
          titleBold={true}
          open={isOpen}
          modal={true}
          onClose={handleClose}
        >
          <div className="pb-4 px-4">
            <Progress
              {...args}
              downloadedSize={downloadedSize}
              onDone={handleOnDone}
            />
          </div>
        </Dialog>
      )}
    </>
  );
};

export const ModalProgress: Story = {
  parameters: {
    docs: {
      source: {
        code: modalExample,
      },
    },
  },
  render: (args) => <ModalProgressComponent {...args} />,
  args: {
    id: "progress-demo",
    totalSize: 249,
    downloadedSize: 0,
    unit: "kb",
    doneMessage: "Download complete!",
  },
};
