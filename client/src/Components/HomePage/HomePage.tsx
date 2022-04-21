import React from "react";
import styles from "./HomePage.module.css";
import { myContext } from "../../Context";
import { useContext } from "react";

export default function HomePage() {
  const userObject = useContext<any>(myContext);

  return (
    <div className={styles.homePageContainer}>
      {userObject && `Signed In!`}
      <h1>Welcome to the Home Page {userObject && userObject.username}</h1>
    </div>
  );
}
