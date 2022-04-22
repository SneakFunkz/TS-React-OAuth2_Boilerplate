import styles from "./NavBar.module.css";
import axios, { AxiosResponse } from "axios";
import { useContext, useState } from "react";
import { myContext } from "../../Context";
import { useNavigate } from "react-router";
import SignUpButton from "./SignUpButton/SignUpButton";
import ProfileIcon from "./ProfileIcon/ProfileIcon";
import IconPopDownMenu from "./IconPopDownMenu/IconPopDownMenu";

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

  // Modal

  const [modalOpen, setModalOpen] = useState(true);

  const MenuItem = (props: any) => {
    return (
      <div onClick={props.onClick} className={styles.menuItem}>
        {props.title}
      </div>
    );
  };

  return (
    <div className={styles.navbar}>
      <ul className={styles.navBarWrapper}>
        <li>
          <div onClick={() => navigate(`/`)} className={styles.logo}>
            RELUXOO
          </div>
        </li>
        <div className={styles.navMiddleGroup} style={{ zIndex: 1 }}>
          <ul>
            <li>
              EXPLORE <br />
              ALL
            </li>
          </ul>{" "}
        </div>
        {!userObject ? (
          <SignUpButton></SignUpButton>
        ) : (
          userObject && (
            <>
              <div onClick={() => setModalOpen(!modalOpen)}>
                <ProfileIcon></ProfileIcon>
              </div>
              {modalOpen && (
                <IconPopDownMenu>
                  <MenuItem
                    onClick={() => navigate(`/guest/${userObject._id}`)}
                    title={`Profile`}
                  ></MenuItem>
                  <MenuItem
                    // onClick={handleLogout}
                    title={`Notifications`}
                  ></MenuItem>
                  <MenuItem onClick={handleLogout} title={`Logout`}></MenuItem>
                </IconPopDownMenu>
              )}
            </>
          )
        )}
      </ul>
    </div>
  );
}
