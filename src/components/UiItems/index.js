// @flow
import Toggle from "./Toggle";
import DropDown from "./DropDown";
import Section from "./Section";
import Link from "./Link";
import Slider from "./Slider";
import ColorPicker from "./ColorPicker";
import ColorPickerAlpha from "./ColorPickerAlpha";
import Text from "./Text";
import Progress from "./Progress";
import * as React from "react";

import type { ControlUI } from "config/flowtypes";

const Control = ({item}: {item: ControlUI}): React.Node => {
  switch (item.type) {
  case "toggle": {
    return Toggle.component(item);
  }
  case "dropDown": {
    return DropDown.component(item);
  }
  case "section": {
    return Section.component(item);
  }
  case "link": {
    return Link.component(item);
  }
  case "slider": {
    return Slider.component(item);
  }
  case "colorpicker": {
    return ColorPicker.component(item);
  }
  case "colorpickerAlpha": {
    return ColorPickerAlpha.component(item);
  }
  case "text": {
    return Text.component(item);
  }
  case "progress": {
    return Progress.component(item);
  }
  default: {
    throw new Error(
      `Unknown UI type "${item.type}" for "${item.text}" component`
    );
  }
  }
};

export default Control;
