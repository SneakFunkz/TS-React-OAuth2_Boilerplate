import googleIcon2 from "../../Assets/icons8-google.svg";
import styles from "./LoginPage.module.css";

export default function LoginPage() {
  const handleGoogleLogin = () => {
    window.open(`http://localhost:4000/auth/google`, "_self");
  };

  return (
    <div className={styles.loginContainer}>
      <h1>Login</h1>
      <div className={styles.googleContainer} onClick={handleGoogleLogin}>
        <div className={styles.googleIconContainer}>
          <img
            style={{ width: 22.5 }}
            src={googleIcon2}
            alt="Google login"
          ></img>
        </div>
        <p className={styles.googleButtonText}>Continue with Google</p>
      </div>
    </div>
  );
}
