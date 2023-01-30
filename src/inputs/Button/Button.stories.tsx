// Button.stories.tsx
import { Meta, Story } from "@storybook/preact";
import { h } from "preact";
import { Button } from "./Button";
import * as React from "preact/compat";

export default {
  component: Button,
} as Meta;

export const Primary: Story = () => <Button>Click me</Button>;

Primary.args = {};
