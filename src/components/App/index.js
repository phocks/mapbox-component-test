import React from "react";
import styles from "./styles.scss";
import { hashify } from "spanify";
import MapboxCore from "../MapboxCore";

// Convert hash marks into divs
hashify({ hashList: ["mountpoint"], defaultClass: "u-full" });

import Portal from "../Portal";

const Scrollyteller = require("@abcnews/scrollyteller");
const scrollyData = Scrollyteller.loadOdysseyScrollyteller();

const mountPoint = document.querySelector(".mountpoint");

console.log(mountPoint);

export default props => {
  return (
    <Portal into={mountPoint}>
      <Scrollyteller
        panels={scrollyData.panels}
        // onMarker={onMarker}
        // className={`scrolly Block is-richtext ${styles.scrollyteller}`}
        // panelClassName={"Block-content u-richtext " + styles.scrollyText}
        // panelComponent={CustomPanel}
        >
        <MapboxCore />
      </Scrollyteller>
    </Portal>
  );
};
