import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Accordion, AccordionItem } from "..";
import { Label, Input } from "../..";
import { AccordionProps } from "../types";

import Data from "../../../data/dogs.json";

const meta: Meta = {
  title: "Menus/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="max-w-prose mx-auto">
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: `
The **Accordion** component provides a collapsible section interface, useful for grouping and hiding content under expandable headers. With built-in options for layout styles, icon types, and customizable sections, it allows for flexible and organized content displays.

### Key Features:
- **Multiple Layout Options:** Includes 'default', 'flush', and 'spaced' layouts for different presentation styles.
- **Dynamic Icon Types:** Choose between 'symbol' and 'arrow' icons for section headers.
- **Size Customization:** Supports 'sm', 'md', and 'lg' sizes for responsive design.

### Import:
\`\`\`jsx
import { Accordion, AccordionItem } from '@smitch/breeze';
\`\`\`

### Example Usage:
\`\`\`jsx
const [open, setOpen] = useState("1");

return (
<Accordion layout="flush" size="md" opened={open}>
  <AccordionItem id="1" title="Category 1" open={open} setOpen={setOpen} icon="arrow" layout="flush">
    <p>Content for Category 1</p>
  </AccordionItem>
  <AccordionItem id="2" title="Category 2" open={open} setOpen={setOpen} icon="arrow" layout="flush">
    <p>Content for Category 2</p>
  </AccordionItem>
</Accordion>
)
\`\`\`

`,
      },
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: Data,
    icon: "symbol",
    iconPosition: "right",
    iconColor: "current",
    layout: "default",
    background: "responsive",
    opened: "1",
    size: "md",
  },
};

Default.argTypes = {
  opened: {
    table: {
      disable: true,
    },
  },
};

export const Custom: Story = {
  render: (args: AccordionProps) => {
    const [open, setOpen] = useState("");
    const [selectedBrand, setSelectedBrand] = useState("");
    const [selectedColor, setSelectedColor] = useState("");
    const [selectedSize, setSelectedSize] = useState("");

    const layouts = {
      default: "mb-0 border border-t-0 first:border-t",
      flush: "border border-x-0 border-t-0 last:border-b-0",
      spaced: "mb-2 last:mb-0 border",
    };

    const layoutClasses = layouts[args.layout || "default"];

    return (
      <Accordion {...args}>
        <>
          <AccordionItem
            id="1"
            layoutClasses={`${layoutClasses}`}
            open={open}
            setOpen={setOpen}
            title="Brand"
            icon={args.icon}
            iconPosition={args.iconPosition}
            iconColor={args.iconColor}
            layout={args.layout}
            background={args.background}
          >
            <div className="p-4 flex flex-col gap-4">
              <Label
                className="font-normal"
                label="Any"
                layout="row_reverse"
                size={args.size}
                type="radio"
              >
                <Input
                  name="brand"
                  type="radio"
                  value=""
                  size={args.size}
                  checked={selectedBrand === ""}
                  onChange={() => setSelectedBrand("")}
                />
              </Label>
              <Label
                className="font-normal"
                label="Adidas"
                layout="row_reverse"
                size={args.size}
                type="radio"
              >
                <Input
                  name="brand"
                  type="radio"
                  value="adidas"
                  size={args.size}
                  checked={selectedBrand === "adidas"}
                  onChange={() => setSelectedBrand("adidas")}
                />
              </Label>
              <Label
                className="font-normal"
                label="Nike"
                layout="row_reverse"
                size={args.size}
                type="radio"
              >
                <Input
                  name="brand"
                  type="radio"
                  value="nike"
                  size={args.size}
                  checked={selectedBrand === "nike"}
                  onChange={() => setSelectedBrand("nike")}
                />
              </Label>
              <Label
                className="font-normal"
                label="Puma"
                layout="row_reverse"
                size={args.size}
                type="radio"
              >
                <Input
                  name="brand"
                  type="radio"
                  value="puma"
                  size={args.size}
                  checked={selectedBrand === "puma"}
                  onChange={() => setSelectedBrand("puma")}
                />
              </Label>
            </div>
          </AccordionItem>
          <AccordionItem
            id="2"
            layoutClasses={`${layoutClasses}`}
            layout={args.layout}
            open={open}
            setOpen={setOpen}
            title="Colour"
            icon={args.icon}
            iconPosition={args.iconPosition}
            iconColor={args.iconColor}
            background={args.background}
          >
            <div className="p-4 flex flex-col gap-4">
              <Label
                className="font-normal"
                label="Any"
                layout="row_reverse"
                size={args.size}
                type="radio"
              >
                <Input
                  name="color"
                  type="radio"
                  value=""
                  size={args.size}
                  checked={selectedColor === ""}
                  onChange={() => setSelectedColor("")}
                />
              </Label>
              <Label
                className="font-normal"
                label="White"
                layout="row_reverse"
                size={args.size}
                type="radio"
              >
                <Input
                  name="color"
                  type="radio"
                  value="white"
                  size={args.size}
                  checked={selectedColor === "white"}
                  onChange={() => setSelectedColor("white")}
                />
              </Label>
              <Label
                className="font-normal"
                label="Black"
                layout="row_reverse"
                size={args.size}
                type="radio"
              >
                <Input
                  name="color"
                  type="radio"
                  value="black"
                  size={args.size}
                  checked={selectedColor === "black"}
                  onChange={() => setSelectedColor("black")}
                />
              </Label>
            </div>
          </AccordionItem>
          <AccordionItem
            id="3"
            layoutClasses={`${layoutClasses}`}
            layout={args.layout}
            open={open}
            setOpen={setOpen}
            title="Size"
            icon={args.icon}
            iconPosition={args.iconPosition}
            iconColor={args.iconColor}
            background={args.background}
          >
            <div className="p-4 flex flex-col gap-4">
              <Label
                className="font-normal"
                label="Any"
                layout="row_reverse"
                size={args.size}
                type="radio"
              >
                <Input
                  name="size"
                  type="radio"
                  value=""
                  size={args.size}
                  checked={selectedSize === ""}
                  onChange={() => setSelectedSize("")}
                />
              </Label>
              <Label
                className="font-normal"
                label="UK 7 - EU 41"
                layout="row_reverse"
                size={args.size}
                type="radio"
              >
                <Input
                  name="size"
                  type="radio"
                  value="7"
                  size={args.size}
                  checked={selectedSize === "7"}
                  onChange={() => setSelectedSize("7")}
                />
              </Label>
              <Label
                className="font-normal"
                label="UK 8 - EU 42"
                layout="row_reverse"
                size={args.size}
                type="radio"
              >
                <Input
                  name="size"
                  type="radio"
                  value="8"
                  size={args.size}
                  checked={selectedSize === "8"}
                  onChange={() => setSelectedSize("8")}
                />
              </Label>
              <Label
                className="font-normal"
                label="UK 8.5 - EU 43"
                layout="row_reverse"
                size={args.size}
                type="radio"
              >
                <Input
                  name="size"
                  type="radio"
                  value="8.5"
                  size={args.size}
                  checked={selectedSize === "8.5"}
                  onChange={() => setSelectedSize("8.5")}
                />
              </Label>
            </div>
          </AccordionItem>
        </>
      </Accordion>
    );
  },

  args: {
    icon: "symbol",
    iconPosition: "right",
    layout: "default",
    background: "responsive",
    size: "md",
  },

  argTypes: {
    data: {
      table: {
        disable: true,
      },
    },
    opened: {
      table: {
        disable: true,
      },
    },
  },
};

export const RTL: Story = {
  args: {
    ...Default.args,
  },
  argTypes: {
    ...Default.argTypes,
  },
};

RTL.decorators = [
  (Story) => (
    <div dir="rtl">
      <Story />
    </div>
  ),
];
