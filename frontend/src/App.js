import React, { useState, useEffect } from "react";
import Axios from "axios";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import UserContext from "./common/UserContext";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });
  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const response = await Axios.post(
        "http://localhost:3001/home/validateToken",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (response.data) {
        const userRes = await Axios.get("http://localhost:3001/home", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };
    checkLoggedIn();
  }, []);
  return (
    <>
      <BrowserRouter>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/" component={Login} />
          </Switch>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
