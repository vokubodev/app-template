import { Meta, StoryObj } from '@storybook/react';
import { InputText } from './InputText';

const meta = {
  title: 'Example/InputText',
  component: InputText,
  tags: ['autodocs'],
} satisfies Meta<typeof InputText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
