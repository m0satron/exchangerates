import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../common/UserContext";
import Axios from "axios";
import Input from "../elements/Input"
import Button from "../elements/Button"

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
      <form onSubmit={submit}>
        <Input
          placeholderText="user"
          inputType="username"
          fn={setUserName}
        />
        <Input
          placeholderText="password"
          inputType="password"
          fn={setPassword}
        />
        <Button
          fn={submit}
          content="log in"
        />
      </form>
    </div>
  );
}
