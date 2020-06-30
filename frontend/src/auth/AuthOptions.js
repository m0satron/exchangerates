import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../common/UserContext";
import Button from "../elements/Button"

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
      <div>
        <Button content="Log in" fn={logIn} />
      </div>
    );
  return (
    <div className="header">
      <p style={{ color: "black" }}>Logged in as {userData.user.userName}</p>
      <Button content="Log out" fn={logOut} />
    </div>
  );
}
