import React, { useEffect, useState, useRef } from "react";
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";

import config from "../../config"; // Try not to commit API tokens to GitHub
import styles from "./styles.scss";

mapboxgl.accessToken = config.MAPBOX_KEY;

let map;

const MapboxCore = props => {
  const inputEl = useRef(null);

  const [initialised, setInitialised] = useState(false);

  useEffect(() => {
    map = new mapboxgl.Map({
      container: inputEl.current,
      style: props.styleUrl,
      center: [137.256953, -26.87192],
      zoom: props.zoomFactor,
      scrollZoom: false
    });

    setInitialised(true);
  }, []);

  useEffect(() => {
    if (!initialised) return;
    map.setStyle(props.styleUrl);
    map.setZoom(props.zoomFactor);
  }, [props.styleUrl, props.zoomFactor]);

  return <div className={styles.root} ref={inputEl} />;
};

export default MapboxCore;
