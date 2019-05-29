import React from "react";
import styles from "./styles.scss";
import { hashify } from "spanify";
import MapboxCore from "../MapboxCore";

// Convert hash marks into divs
hashify({ hashList: ["mountpoint"], defaultClass: "u-full"  });

import Portal from "../Portal";

const mountPoint = document.querySelector(".mountpoint");

console.log(mountPoint)

export default props => {
  return (
    <Portal into={mountPoint}>
      <MapboxCore />
    </Portal>
  );
};
