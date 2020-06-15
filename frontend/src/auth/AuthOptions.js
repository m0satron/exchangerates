import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../common/UserContext";

export default function AuthOptions() {
  const { userData, setUserData } = useContext(UserContext);
  const history = useHistory();
  const logIn = () => history.push("/login");
  const logOut = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
  };

  if (!userData.user)
    return (
      <button className="button" onClick={logIn}>
        Log in
      </button>
    );
  return (
    <div className="header">
      <p style={{ color: "black" }}>Logged in as {userData.user.userName}</p>
      <button className="button" onClick={logOut}>
        {" "}
        Log Out{" "}
      </button>
    </div>
  );
}
