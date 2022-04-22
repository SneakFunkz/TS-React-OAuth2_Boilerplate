import React from "react";
import styles from "./SignUpButton.module.css";
import { useNavigate } from "react-router";

export default function SignUpButton(props: any) {
  let navigate = useNavigate();
  return (
    <div className={styles.buttonContainer} onClick={() => navigate(`/login`)}>
      <p className={styles.buttonText}> SIGN UP</p>
    </div>
  );
}
