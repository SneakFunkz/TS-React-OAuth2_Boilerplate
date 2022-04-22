import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import LoginPage from "./Components/LoginPage/LoginPage";
import NavBar from "./Components/NavBar/NavBar";
import UserProfile from "./Components/Users/UserProfile/UserProfile";
import Users from "./Components/Users/Users";
import { myContext } from "./Context";

function App() {
  const userObject = useContext<any>(myContext);
  console.log(userObject);
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/guest" element={<Users />}>
          <Route path="/guest/:userID" element={<UserProfile />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
