import React, { useState, useEffect, useRef } from "react";
import styles from "./styles.scss";

const CustomPanel = props => {
  const base = useRef();

  // // Once on mount
  useEffect(() => {
    if (!base.current) return;
    if (!props.nodes) return;

    // Tell scrollyteller that this is a panel
    props.reference(base.current);

    if (!props.config.swap) {
      const isMobile = window.innerWidth < 440;
      // Append CoreMedia nodes
      props.nodes.forEach(node => {
        // Make sure images fit inside the panels
        if (node.className.indexOf("ImageEmbed") > -1 || node.tagName === "IMG") {
          node.style.setProperty("display", "block");
          node.style.setProperty("margin", "auto");
          node.style.setProperty("width", isMobile ? "83.333333%" : "66.66667%");
          node.style.setProperty("padding-left", "0.875rem");
          node.style.setProperty("padding-right", "0.875rem");
          if (node.hasAttribute("height")) {
            node.removeAttribute("height");
          }
        } else if (node.querySelector("img")) {
          node.style.setProperty("margin", "auto");
          node.style.setProperty("width", isMobile ? "83.333333%" : "66.66667%");
          node.style.setProperty("padding-left", "0.875rem");
          node.style.setProperty("padding-right", "0.875rem");
          [].slice.call(node.querySelectorAll("img")).forEach(img => {
            img.removeAttribute("height");
          });
        }
        base.current.appendChild(node);
      });
    }

    // On unmount
    return () => {
      if (!base.current) return;
      if (!props.nodes) return;

      props.nodes.forEach(node => {
        if (base.current.contains(node)) {
          base.current.removeChild(node);
        }
      });
    };
  }, []);

  return <div className={`${styles.base} ${styles.dark}`} ref={base} />;
};

export default CustomPanel;
