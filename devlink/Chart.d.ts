import * as React from "react";
import * as Types from "./types";

declare function Chart(props: {
  as?: React.ElementType;
  addressSlot?: Types.Devlink.Slot;
}): React.JSX.Element;
