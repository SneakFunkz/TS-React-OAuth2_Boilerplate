import React from "react";
import { useNavigate } from "react-router";
import styles from "./IconPopDownMenu.module.css";

export default function IconPopDownMenu(props: any) {
  return <div className={styles.menuContainer}>{props.children}</div>;
}
