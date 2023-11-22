import React from "react";
import * as _Builtin from "./_Builtin";

export function Button({ as: _Component = _Builtin.Link, slot, slot2, slot3 }) {
  return (
    <_Component
      button={true}
      options={{
        href: "#",
      }}
    >
      {"Button Text"}
    </_Component>
  );
}
