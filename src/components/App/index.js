import React, { useState } from "react";
import styles from "./styles.scss";
import { hashify } from "spanify";
import MapboxCore from "../MapboxCore";
import CustomPanel from "../CusomPanel";

// Convert hash marks into divs
hashify({ hashList: ["mountpoint"], defaultClass: "u-full" });

import Portal from "../Portal";

const Scrollyteller = require("@abcnews/scrollyteller");
const scrollyData = Scrollyteller.loadOdysseyScrollyteller();

const mountPoint = document.querySelector(".mountpoint");

const App = props => {
  const [mapZoom, setMapZoom] = useState(3);
  const [destination, setDestination] = useState([153.021072, -27.470125]);

  const onMarker = () => {
    
    // setMapZoom(Math.random() * 5);
    
     setDestination([123.021072 + Math.random() * 5, -27.470125 + Math.random()]);
  };

  const scrollTweener = (progress, panel, pixelsAboveFold) => {
    console.log(progress, panel, pixelsAboveFold);
  };

  return (
    <Portal into={mountPoint}>
      <Scrollyteller
        panels={scrollyData.panels}
        onMarker={onMarker}
        panelComponent={CustomPanel}
        // className={`scrolly Block is-richtext ${styles.scrollyteller}`}
        // panelClassName={"Block-content u-richtext " + styles.scrollyText}
        // scrollTween={scrollTweener}
      >
        <MapboxCore
          // styleUrl={"mapbox://styles/phocksx/cjrvgcikn0ayw1fjn2xzml6za"}
          zoomFactor={mapZoom}
          destination={destination}
        />
      </Scrollyteller>
    </Portal>
  );
};

export default App;
