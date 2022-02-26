import React from "react";
import { Story, Meta } from "@storybook/react";

import Icon, { TIconComponent } from "../index";
import { iconNames, TIconName } from "../Icon.types";

export default {
  title: "All Icons",
  component: Icon,
} as Meta;

const stylesContainer = {
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  fontFamily: "Roboto, Lato, Arial",
  color: "#333333",
};

const stylesThumbnail = {
  padding: "20px",
  margin: "10px",
  width: "170px",
  heihgt: "170px",
  border: "1px solid #EEEEEE",
  borderRadius: "8px",
  textAlign: "center",
};

const stylesName = {
  color: "#444444",
  fontSize: "14px",
  margin: "10px 0 0 0",
};

const Template: Story<TIconComponent> = (args) => (
  <div style={stylesContainer}>
    {iconNames.map((name) => (
      <div style={stylesThumbnail}>
        <Icon name={name} size="md" />
        <p style={stylesName}>{name}</p>
      </div>
    ))}
  </div>
);

export const Default = Template.bind({});

Default.storyName = "All Icons";
