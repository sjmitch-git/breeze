import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Codeblock } from "..";
import "prismjs/themes/prism-tomorrow.min.css";

import "prismjs/components/prism-jsx";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-tsx";

const meta: Meta = {
  title: "Typography/Codeblock",
  component: Codeblock,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `The **Codeblock** component leverages [Prism.js](https://prismjs.com/) to provide syntax highlighting for code snippets in various programming languages. It supports customization for themes and languages, making it adaptable for different project requirements.

### Key Features:
- **Syntax Highlighting**: Supports a wide range of languages with automatic syntax highlighting.
- **Customizable Language**: Specify the programming language for accurate syntax highlighting using Prism.js.
- **Configurable Themes**: Use different CSS themes for light or dark mode.
- **Responsive Design**: Works well in light and dark modes with configurable themes.

### Prism.js Installation:
To enable syntax highlighting using Prism.js, you need to install it as a dependency:

\`\`\`bash
npm install prismjs
\`\`\`

### Adding Languages:
Prism.js supports a variety of programming languages, but only includes a few by default (like JavaScript and HTML). You can load additional languages as needed. For example, to add support for JSX, TypeScript, and TSX, import the following modules:

\`\`\`ts
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-tsx'
\`\`\`

You can explore other supported languages in the [Prism.js documentation](https://prismjs.com/#languages-list).

### CSS Themes:
Prism.js provides multiple CSS themes to style the code blocks. You can apply any of the available themes or create a custom one. Here’s how you can import the Prism **Tomorrow** theme for dark mode:

\`\`\`ts
import 'prismjs/themes/prism-tomorrow.min.css'
\`\`\`

You can switch between themes for light and dark modes based on your UI requirements. Check out [Prism.js themes](https://prismjs.com/#themes) for more options.


### Import:
\`\`\`tsx
import { Codeblock } from '@smitch/breeze'
\`\`\`

### Usage Example:
\`\`\`tsx
<Codeblock language="javascript">
	function greet(name) {
		return 'Hello, ' + name;
	}
</Codeblock>
\`\`\`
`,
      },
    },
  },
} satisfies Meta<typeof Codeblock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "HTML Code",
  argTypes: {
    style: {
      table: {
        disable: true,
      },
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl", "xxl"],
      description: "Font size of the element.",
    },
  },
  args: {
    children: `<h1>Header H1</h1>
<p>Paragraph Text with <strong>some bold text</strong> and <em>italic text</em>.</p>

<h2>Header H2</h2>
<p><a href="https://example.com">A link</a>.</p>

<h3>Image Example</h3>
<p>Below is an example image:</p>
<img src="https://via.placeholder.com/150" alt="Example Image" />`,
    language: "markup",
    size: "md",
  },
};

export const CSSCode: Story = {
  argTypes: {
    ...Default.argTypes,
  },
  args: {
    children: `/* Global styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Basic layout styles */
body {
  font-family: 'Arial', sans-serif;
  background-color: #f4f4f9;
  color: #333;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}`,
    language: "css",
    size: "md",
  },
};

export const JSCode: Story = {
  name: "JavaScript Code",
  argTypes: {
    ...Default.argTypes,
  },
  args: {
    children: `// Arrow function to check if a number is even
const isEven = (num) => num % 2 === 0;

// Check if numbers 1 through 5 are even
for (let i = 1; i <= 5; i++) {
  console.log(\`\${i} is \${isEven(i) ? 'even' : 'odd'}\`);
}`,
    language: "javascript",
    size: "md",
  },
};

export const TSCode: Story = {
  name: "TypeScript Code",
  argTypes: {
    ...Default.argTypes,
  },
  args: {
    children: `// Define a User interface
interface User {
  id: number;
  name: string;
  isAdmin: boolean;
}

// Create a function that accepts a User object
function greetUser(user: User): string {
  return user.isAdmin
    ? \`Hello, Admin \${user.name}!\`
    : \`Hello, \${user.name}!\`;
}`,
    language: "javascript",
    size: "md",
  },
};

export const JSXCode: Story = {
  argTypes: {
    ...Default.argTypes,
  },
  args: {
    children: `import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;`,
    language: "jsx",
    size: "md",
  },
};

export const TSXCode: Story = {
  argTypes: {
    ...Default.argTypes,
  },
  args: {
    children: `import React, { useState } from 'react';

// Define types for props
interface ButtonProps {
  label: string;
}

const Counter: React.FC<ButtonProps> = ({ label }) => {
  const [count, setCount] = useState<number>(0);

  const increment = (): void => setCount(count + 1);
  const decrement = (): void => setCount(count - 1);

  return (
    <div>
      <h1>{label}: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;`,
    language: "tsx",
    size: "md",
  },
};
