import React, { useEffect, useRef } from "react";


import config from "../../config";

import styles from "./styles.scss";

var mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");

mapboxgl.accessToken = config.MAPBOX_KEY;

export default props => {
  const inputEl = useRef(null);
  useEffect(() => {
    var map = new mapboxgl.Map({
      container: inputEl.current,
      style: 'mapbox://styles/phocksx/cjw8qf3hh0vo31ckgen821rq9',
center: [137.256953, -26.871920],
zoom: 4.0
    });
  });

  return <div className={styles.root} ref={inputEl} />;
};
