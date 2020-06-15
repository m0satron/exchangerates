import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../common/UserContext";
import Axios from "axios";

export default function Login() {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    const loginUser = { userName, password };
    const loginRes = await Axios.post("http://localhost:3001/login", loginUser);
    setUserData({
      token: loginRes.data.token,
      user: loginRes.data.user,
    });
    localStorage.setItem("auth-token", loginRes.data.token);
    history.push("/");
  };

  return (
    <div className="loginPage">
      <h2>Log in</h2>
      <form onSubmit={submit}>
        <label htmlFor="username">username</label>
        <input
          id="username"
          type="username"
          onChange={(e) => setUserName(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="login"></input>
      </form>
    </div>
  );
}
