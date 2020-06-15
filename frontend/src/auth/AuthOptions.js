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

  return (
    <div>
      {userData.user ? (
        <button className="header__item" onClick={logOut}>
          {" "}
          Log Out{" "}
        </button>
      ) : (
        <button className="header__item" onClick={logIn}>
          Log in
        </button>
      )}
    </div>
  );
}
