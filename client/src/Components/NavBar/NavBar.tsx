import React from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import { useContext } from "react";
import { myContext } from "../../Context";

export default function NavBar() {
  const userObject = useContext<any>(myContext);

  const handleLogout = () => [
    axios
      .get("http://localhost:4000/auth/logout", {
        withCredentials: true,
      })
      .then((res: AxiosResponse) => {
        if (res.data === "done") {
          console.log(res);
          window.location.href = "/";
        }
      }),
  ];

  return (
    <div className={styles.navbar}>
      <ul className={styles.navBarWrapper}>
        <li>
          <Link to="/">Home</Link>
        </li>

        {!userObject ? (
          <li>
            <Link to="/login">Login</Link>
          </li>
        ) : (
          <li onClick={handleLogout}>Logout</li>
        )}
      </ul>
    </div>
  );
}
