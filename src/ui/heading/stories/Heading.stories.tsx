import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Heading } from "..";
import { Badge, Ratings } from "../..";
import { FaStar } from "react-icons/fa6";

const BadgeExample = `<Heading level={1} align="left" weight="bold" transform="capitalize">
	<>
	Heading Text
	<Badge
		size='inherit'
		color='accent'
		background='transparent'
	>
		<FaStar />
	</Badge>
	</>
</Heading>`;

const RatingsExample = `<Heading level={3} align="left" weight="light" transform="uppercase">
	<>
	User Ratings
	<Ratings
		rating={3}
		range={5}
		icon="heart"
		size="inherit"
		background="transparent"
		color="info"
	/>
	</>
</Heading>`;

const meta = {
  title: "Typography/Heading",
  component: Heading,
  parameters: {
    docs: {
      description: {
        component: `The \`Heading\` component is used to provide predefined headline styles, such as H1, H2, H3, etc., ensuring visual consistency across the application. It offers customizable properties like alignment, font weight, and text transformation.
### Key Features:
- **Heading Levels (H1-H6)**: Supports all heading levels to maintain semantic HTML structure.
- **Customizable Styles**: Options for font weight, text alignment, and text transformation (case).
- **Consistent Typography**: Ensures visual consistency across your UI by using predefined styles.
- **Supports Custom Content**: Accepts React nodes as children, allowing the addition of icons, badges, or other inline elements.

### Import:
\`\`\`tsx
import { Heading } from '@smitch/breeze'
\`\`\`

### Usage Example:
\`\`\`tsx
<Heading level={1} align="left" weight="bold" transform="capitalize">
  Example Heading
</Heading>
\`\`\`
`,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="p-2">
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  argTypes: {
    level: { control: { type: "select", options: [1, 2, 3, 4, 5, 6] } },
    weight: {
      control: {
        type: "select",
        options: ["light", "normal", "medium", "semibold", "bold"],
      },
    },
    align: {
      control: { type: "select", options: ["left", "center", "right"] },
    },
    transform: {
      control: {
        type: "select",
        options: ["normal", "capitalize", "uppercase", "lowercase"],
      },
    },
    children: { control: "text" },
    className: { control: "text" },
  },
  args: {
    level: 1,
    align: "left",
    weight: "bold",
    transform: "capitalize",
    children: "Heading text",
  },
};

export const HeadingWithBadge: Story = {
  parameters: {
    docs: {
      source: {
        code: BadgeExample,
      },
    },
  },
  args: {
    ...Default.args,
    level: 2,
    children: (
      <>
        Heading text{" "}
        <Badge size="inherit" badgeColor="accent" badgeBackground="transparent">
          <FaStar />
        </Badge>
      </>
    ),
  },
};

export const HeadingWithRatings: Story = {
  parameters: {
    docs: {
      source: {
        code: RatingsExample,
      },
    },
  },
  args: {
    ...Default.args,
    level: 3,
    transform: "uppercase",
    weight: "semibold",
    className: "text-info",
    children: (
      <>
        User ratings:{" "}
        <Ratings
          rating={3}
          range={5}
          icon="heart"
          size="inherit"
          ratingsBackground="transparent"
          ratingsColor="info"
        />
      </>
    ),
  },
};
