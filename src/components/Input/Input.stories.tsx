import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

// Meta
const meta: Meta<typeof Input> = {
  component: Input,
  title: "InputStory",
  argTypes: {},
  tags: ['autodocs']
};
export default meta;

// StoryObj
type Story = StoryObj<typeof Input>;

export const Large: Story = (args) => (
  <Input data-testId="input-id" {...args} />
);
Large.args = {
  size: "large",
  placeholder: "Large",
};

export const Small: Story = (args) => (
  <Input data-testId="input-id" {...args} />
);
Small.args = {
  size: "small",
  placeholder: "Small",
};
