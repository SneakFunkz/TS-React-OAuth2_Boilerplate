import React, { useEffect, useState } from "react";
import styles from "./ProfileIcon.module.css";
import { useContext } from "react";
import { myContext } from "../../../Context";

export default function ProfileIcon() {
  const [initials, setInitials] = useState<string>();
  const userObject = useContext<any>(myContext);

  useEffect(() => {
    const { firstName, familyName } = userObject;

    const firstLetter = firstName.toString().charAt(0);
    const secondLetter = familyName.toString().charAt(0);

    setInitials(firstLetter + secondLetter);
  }, [userObject]);

  // if (userObject) {
  //   const { firstName, familyName } = userObject;
  //   setInitals(firstName.charAt(0) + familyName.charAt(0));
  // }

  return (
    <div className={styles.iconContainer}>
      <div className={styles.initials}>{initials}</div>
    </div>
  );
}
