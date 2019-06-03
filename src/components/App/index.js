import React, { useState } from "react";
import styles from "./styles.scss";
import { hashify } from "spanify";
import Mapboxer from "mapboxer";
import CustomPanel from "../CusomPanel";
import _ from "lodash";

import config from "../../config";

// Convert hash marks into divs
hashify({ hashList: ["mountpoint"], defaultClass: "u-full" });

import Portal from "../Portal";

const Scrollyteller = require("@abcnews/scrollyteller");
const scrollyData = Scrollyteller.loadOdysseyScrollyteller();

const mountPoint = document.querySelector(".mountpoint");

const App = props => {
  const [mapZoom, setMapZoom] = useState(3);
  const [destination, setDestination] = useState([153.021072, -27.470125]);
  const [style, setStyle] = useState("mapbox://styles/mapbox/light-v10");
  const [bounds, setBounds] = useState([
    [135.8243337738, -32.8730506316],
    [158.1124930831, -8.5116828502]
  ]);

  const onMarker = () => {
    // if (style === "mapbox://styles/mapbox/dark-v10") setStyle("mapbox://styles/mapbox/light-v10");
    // else setStyle("mapbox://styles/mapbox/dark-v10");

    if (_.isEqual(bounds, [[135.8243337738, -32.8730506316], [158.1124930831, -8.5116828502]]))
      setBounds([[111.88, -37.21], [134.17, -13.71]]);
    else setBounds([[135.8243337738, -32.8730506316], [158.1124930831, -8.5116828502]]);
  };

  const scrollTweener = (progress, panel, pixelsAboveFold) => {
    console.log(progress, panel, pixelsAboveFold);
  };

  return (
    <Portal into={mountPoint}>
      <Scrollyteller panels={scrollyData.panels} onMarker={onMarker} panelComponent={CustomPanel}>
        <Mapboxer apiKey={config.MAPBOX_KEY} setStyle={style} setBounds={bounds} />
      </Scrollyteller>
    </Portal>
  );
};

export default App;
