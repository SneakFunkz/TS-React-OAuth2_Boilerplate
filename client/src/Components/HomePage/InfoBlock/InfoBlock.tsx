import React from "react";
import styles from "./InfoBlock.module.css";
import InfoBlock2 from "../../../Assets/InfoBlock2.png";

export default function InfoBlock(props: any) {
  return (
    <div className={styles.infoBlockContainer}>
      <div className={styles.textBlock}>
        <p className={styles.blockTitle}>Simplicity</p>
        <p className={styles.blockText}>
          As a host with Dtravel, you get a little more of everything: more
          property protection, more control over communication with guests, more
          money in your pocket and more say in how the network itself functions.
        </p>
        <button className={`primaryButton right bottom`}>SIGN UP</button>
      </div>
      <div className={styles.imageBlock}>
        <img className={styles.image} src={InfoBlock2}></img>
      </div>
    </div>
  );
}
