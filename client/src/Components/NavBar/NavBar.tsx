import styles from "./NavBar.module.css";
import axios, { AxiosResponse } from "axios";
import { useContext } from "react";
import { myContext } from "../../Context";
import { useNavigate } from "react-router";
import SignUpButton from "./SignUpButton/SignUpButton";
import ProfileIcon from "./ProfileIcon/ProfileIcon";

export default function NavBar() {
  let navigate = useNavigate();
  const userObject = useContext<any>(myContext);

  const handleLogout = () => {
    axios
      .get("http://localhost:4000/auth/logout", {
        withCredentials: true,
      })
      .then((res: AxiosResponse) => {
        if (res.data === "done") {
          console.log(res);
          window.location.href = "/";
        }
      });
  };

  return (
    <div className={styles.navbar}>
      <ul className={styles.navBarWrapper}>
        <li onClick={() => navigate(`/`)}>
          <div className={styles.logo} style={{ letterSpacing: 5 }}>
            RELUXOO
          </div>
        </li>
        <div className={styles.navMiddleGroup}>Explore </div>
        {!userObject ? (
          <SignUpButton></SignUpButton>
        ) : (
          userObject && <ProfileIcon></ProfileIcon>
        )}
      </ul>
    </div>
  );
}
