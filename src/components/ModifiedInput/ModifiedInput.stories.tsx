import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import ModifiedInput from "./ModifiedInput";

// Meta
const meta: Meta<typeof ModifiedInput> = {
  component: ModifiedInput,
  title: "ModifiedInputStory",
  argTypes: {},
  tags: ['autodocs']
};
export default meta;

// StoryObj
type Story = StoryObj<typeof ModifiedInput>;

export const Large: Story = (args) => (
  <ModifiedInput data-testId="modifiedinput-id" {...args} />
);
Large.args = {
  size: "large",
  placeholder: "Large",
};

export const Small: Story = (args) => (
  <ModifiedInput data-testId="modifiedinput-id" {...args} />
);
Small.args = {
  size: "small",
  placeholder: "Small",
};
