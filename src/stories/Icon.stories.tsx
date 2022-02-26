import React from "react";
import { Story, Meta } from "@storybook/react";

import Icon, { TIconComponent } from "../index";
import { iconNames } from "../Icon.types";

export default {
  title: "Icon",
  component: Icon,
  argTypes: {
    name: {
      description: "Name of the Icon",
      control: {
        type: "select",
        options: iconNames,
      },
    },
  },
} as Meta;

const Template: Story<TIconComponent> = (args) => <Icon {...args} />;

export const Default = Template.bind({});

Default.storyName = "Icon";

Default.args = {
  name: "AddressBookRegular",
  size: "lg",
};
