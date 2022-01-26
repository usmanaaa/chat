import React, { useState, useEffect, useRef } from "react";
import RINGS from "vanta/dist/vanta.rings.min";
import styles from "./Background.module.css";
import * as THREE from "three";

export const Background = ({ content }) => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        RINGS({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          scale: 1.0,
          scaleMobile: 1.0,
          color1: "#ff0000",
          color2: "#00ff00",
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div className={styles.container}>
      <main ref={vantaRef} className={styles.main}>
        {content}
      </main>
    </div>
  );
};
