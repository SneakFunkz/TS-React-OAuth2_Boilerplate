import React, { useEffect, useState } from "react";
import styles from "./ExploreMenu.module.css";

export default function ExploreMenu() {
  const tabs = ["COUNTRY", "TYPE"];
  const [isOpen, setIsOpen] = useState(false);
  const [openTab, setOpenTab] = useState("COUNTRY");

  const tabElements = tabs.map((element) => {
    return (
      <div
        key={element}
        className={styles.tabElement}
        onClick={() => setOpenTab(element)}
        style={{
          fontWeight: openTab === element ? 600 : 300,
          opacity: openTab === element ? 0.8 : 0.4,
        }}
      >
        {element}
      </div>
    );
  });

  return (
    <div className={styles.menuContainer}>
      <div
        className={styles.navitgationTitle}
        onClick={() => setIsOpen(!isOpen)}
      >
        EXPLORE
      </div>
      {isOpen && (
        <>
          <div className={styles.tabContainer}>{tabElements}</div>
          {openTab === ""}
        </>
      )}
    </div>
  );
}
