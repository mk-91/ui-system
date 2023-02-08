// Button.stories.tsx
import { Args, Meta, Story } from '@storybook/preact';
import { h } from 'preact';
import { Button } from './Button';
import * as React from 'preact/compat';

export default {
  tittle: 'Button',
  component: Button,
} as Meta;

export const Primary: Story = (args: Args) => (
  <Button {...args} onClick={() => {}}>
    Click me
  </Button>
);

Primary.args = {
  disabled: false,
  variant: 'primary',
};
