import styles from "./HomePage.module.css";
import { myContext } from "../../Context";
import { useContext } from "react";
import TopSection from "./TopSection/TopSection";
import LandingSearchBar from "./LandingSearchBar/LandingSearchBar";
import InfoBlock from "./InfoBlock/InfoBlock";

export default function HomePage() {
  const userObject = useContext<any>(myContext);

  return (
    <div className={styles.homePageContainer}>
      {/*  {userObject && `Signed In!`} */}
      {/* <h1>Welcome to the Home Page {userObject && userObject.firstName}</h1> */}
      <div className={styles.backgroundBlackDeco}></div>
      <LandingSearchBar></LandingSearchBar>
      <TopSection></TopSection>
      <InfoBlock></InfoBlock>
    </div>
  );
}
