// import React from "react";
import { createPortal } from "react-dom";

export default props => {
  return createPortal(props.children, props.into);
};
