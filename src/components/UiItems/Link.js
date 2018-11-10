// @flow
import React from "react";
import createComponent from "./base";
import { isEnabled, isDisabled } from "./utils";
import { renderRawIcon } from "config/icon";

import type { UILink } from "config/flowtypes";

import Button from "@material-ui/core/Button";

const followLink = (item, state) => () => {
  if (isEnabled(item, state)) {
    return window.open(item.link, "_blank");
  }
  return false;
};

const Icon = ({item, state}) => {
  if (item.icon == null) {
    return false;
  }
  return renderRawIcon(item.icon(state), "mdi-24px");
};

const BaseComponent = (_h, item: UILink, state, _changeState) => (
  <Button
    variant="raised"
    onClick={followLink(item, state)}
    color="primary"
    disabled={isDisabled(item, state)}
  >
    <Icon item={item} state={state} />
    {item.text}
  </Button>
);

export default createComponent({
  id: "link",
  name: "Link",
  desc: `
    The link is a button that opens a web page in a new tab.
  `,
  parameters: {
    text: "A descriptive label for the link"
  },
  baseComponent: BaseComponent
});
