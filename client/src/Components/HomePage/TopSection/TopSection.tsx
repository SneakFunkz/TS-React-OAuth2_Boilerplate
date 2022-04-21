import React from "react";
import styles from "./TopSection.module.css";
import HomePage from "../../../Assets/HomePage.png";

export default function TopSection() {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.landingSection}>
        <p className={styles.landingTitle}>
          Rediscover what life has to offer you
        </p>
        <img src={HomePage} className={styles.landingImage}></img>
      </div>
    </div>
  );
}
