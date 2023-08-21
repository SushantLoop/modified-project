import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import ModifiedButton from "./ModifiedButton";

// Meta
const meta: Meta<typeof ModifiedButton> = {
  component: ModifiedButton,
  title: "ModifiedButtonStory",
  argTypes: {},
  tags: ['autodocs']
};
export default meta;

// StoryObj
type Story = StoryObj<typeof ModifiedButton>;

export const Primary: Story = (args) => (
  <ModifiedButton data-testId="modifiedbutton-id" {...args} />
);
Primary.args = {
  primary: true,
  disabled: false,
  text: "Primary",
};

export const Secondary: Story = (args) => (
  <ModifiedButton data-testId="modifiedbutton-id" {...args} />
);
Secondary.args = {
  primary: false,
  disabled: false,
  text: "Secondary",
};

export const Disabled: Story = (args) => (
  <ModifiedButton data-testId="modifiedbutton-id" {...args} />
);
Disabled.args = {
  primary: false,
  disabled: true,
  text: "Disabled",
};