import Icon from '@components/Icon';
import Button from '@components/Button';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  component: Button,
  title: 'Button',
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  tags: ['autodocs'],
  excludeStories: /.*Data$/,
  args: {
    onClickAction: fn(),
  },
} satisfies Meta<typeof Button>;
export default meta;

type Story = StoryObj<typeof meta>;

// export const Default: Story = {
//   args: {
//     type: 'button',
//     title: 'Button',
//     label: 'Button',
//     size: 'md',
//   },
// };

export const Primary: Story = {
  args: {
    type: 'button',
    title: 'button',
    size: 'md',
    label: 'Primary',
    isPrimary: true,
  },
};

export const Secondary: Story = {
  args: {
    type: 'button',
    title: 'button',
    size: 'md',
    label: 'Secondary',
    isPrimary: false,
  },
};

export const IconButton: Story = {
  render: (args) => {
    return <Button {...args} />;
  },
  args: {
    title: 'Icon',
    label: 'Icon',
    isIcon: true,
  },
  argTypes: {
    children: {
      options: ['eye', 'pen', 'trash'], // available options for children
      mapping: {
        // map available option with corresponding element or value
        eye: <Icon icon="eyeIcon" />,
        pen: <Icon icon="penIcon" />,
        trash: <Icon icon="trashIcon" />,
      },
      control: {
        // define control (here select) and labels
        type: 'select',
        labels: {
          eye: 'Eye Icon',
          pen: 'Pen Icon',
          trash: 'Trash Icon',
        },
      },
      table: {
        type: { summary: 'select' },
        defaultValue: { summary: 'Eye Icon' }, // default value when loading
      },
    },
  },
};
