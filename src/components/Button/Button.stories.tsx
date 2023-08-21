import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

// Meta
const meta: Meta<typeof Button> = {
  component: Button,
  title: "ButtonStory",
  argTypes: {},
  tags: ['autodocs']
};
export default meta;

// StoryObj
type Story = StoryObj<typeof Button>;

export const Primary: Story = (args) => (
  <Button data-testId="button-id" {...args} />
);
Primary.args = {
  primary: true,
  disabled: false,
  text: "Primary",
};

export const Secondary: Story = (args) => (
  <Button data-testId="button-id" {...args} />
);
Secondary.args = {
  primary: false,
  disabled: false,
  text: "Secondary",
};

export const Disabled: Story = (args) => (
  <Button data-testId="button-id" {...args} />
);
Disabled.args = {
  primary: false,
  disabled: true,
  text: "Disabled",
};