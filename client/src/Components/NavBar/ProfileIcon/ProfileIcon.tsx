import React, { useEffect, useState } from "react";
import styles from "./ProfileIcon.module.css";
import { useContext } from "react";
import { myContext } from "../../../Context";
import { Icon } from "@iconify/react";

export default function ProfileIcon() {
  const [initials, setInitials] = useState<string>();
  const userObject = useContext<any>(myContext);

  useEffect(() => {
    const { firstName, familyName } = userObject;

    const firstLetter = firstName.toString().charAt(0).toString();
    const secondLetter = familyName.toString().charAt(0).toString();

    setInitials(firstLetter + secondLetter);
  }, [userObject]);

  return (
    <div className={styles.iconContainer}>
      <div className={styles.initalsHoop}>
        <Icon icon="gridicons:user" height="40" />
        {/* <div className={styles.initials}>{initials}</div> */}
      </div>
    </div>
  );
}
