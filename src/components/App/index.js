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
  const [style, setStyle] = useState("mapbox://styles/mapbox/satellite-v9");
  const [zoom, setZoom] = useState(3);
  const [bounds, setBounds] = useState([
    [135.8243337738, -32.8730506316],
    [158.1124930831, -8.5116828502]
  ]);
  const [flyTo, setFlyTo] = useState({});
  const [easeTo, setEaseTo] = useState({});
  const [jumpTo, setJumpTo] = useState({});

  const onMarker = () => {
    // if (style === "mapbox://styles/mapbox/dark-v10") setStyle("mapbox://styles/mapbox/light-v10");
    // else setStyle("mapbox://styles/mapbox/dark-v10");

    // if (_.isEqual(bounds, [[135.8243337738, -32.8730506316], [158.1124930831, -8.5116828502]]))
    //   setBounds([[121.88, -37.21], [114.17, -22.71]]);
    // else setBounds([[135.8243337738, -32.8730506316], [158.1124930831, -8.5116828502]]);

    if (flyTo.index === 1)
      setFlyTo({ center: [115.857, -31.95], index: 0, zoom: 9, pitch: 60, bearing: -10, screenSpeed: 0.5 });
    else setFlyTo({ center: [152.021, -27.47], index: 1, zoom: 5, pitch: 0, bearing: 0, screenSpeed: 0.5 });

    // if (jumpTo.index === 1)
    // setJumpTo({ center: [115.857, -31.95], index: 0, zoom: 9, pitch: 60, bearing: -10, duration: 1300 });
    // else setJumpTo({ center: [152.021, -27.47], index: 1, zoom: 5, pitch: 0, bearing: 0, duration: 1300 });
  };

  const scrollTweener = (progress, panel, pixelsAboveFold) => {
    if (progress < 0) return;
    // console.log(progress)
    // setZoom(progress * 5)
  };

  const someEvent = () => {
    setFlyTo({
      center: [135.857, -31.95],
      index: 0,
      zoom: 9,
      pitch: 0,
      bearing: 0,
      screenSpeed: 0.5
    });
  };

  return (
    <Portal into={mountPoint}>
      <div onClick={someEvent}>
      <Scrollyteller
        panels={scrollyData.panels}
        onMarker={onMarker}
        panelComponent={CustomPanel}
        scrollTween={scrollTweener}
        
      >
        <Mapboxer
          apiKey={config.MAPBOX_KEY}
          setStyle={style}
          fitBounds={bounds}
          setZoom={zoom}
          interactive={false}
          flyTo={flyTo}
          antialias={false}
          
        />
      </Scrollyteller>
      </div>
    </Portal>
  );
};

export default App;
