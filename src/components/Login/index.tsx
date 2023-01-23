import React, { useCallback, useEffect, useState } from "react";
import useLocalStorage from "../../hooks/local-storage";
import "./index.scss";

const DUMMY = [
  {
    id: 1,
    name: "Ferhat",
    username: "ferolinka",
    password: "12345tc",
  },
  {
    id: 2,
    name: "Nimet",
    username: "halilo",
    password: "098765tc",
  },
  {
    id: 3,
    name: "Kamuran",
    username: "kamobaba",
    password: "kmb12345",
  },
];

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const [storage, setStorage] = useLocalStorage("userLogin", {
    username: username,
    password: password,
    isLogin: isLogin,
  });

  const userControl = useCallback(
    (username: string, password: string) => {
      return DUMMY.find((control: any) =>
        control.username === username && control.password === password
          ? setStorage({ isLogin, ...control })
          : null
      );
    },
    [setStorage, isLogin]
  );

  const handleSubmit = useCallback(
    (e: any) => {
      e.preventDefault();
      if (username == null || username.length <= 6) {
        return false;
      }
      if (password == null || password.length <= 6) {
        return false;
      }
      if (userControl(username, password)) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    },
    [username, password, userControl]
  );
  
  return (
    <>
      <div className="___bl"></div>
      <div className="login-container">
        <div className="left-field-box"></div>
        <div className="right-field-box">
          <div className="login-filed">
            <div className="login-title-container">
              <h1>Login</h1>
              <span>Don't you have an account?</span>
            </div>
            <form action="" onSubmit={handleSubmit}>
              <div className="login-input-field">
                <label htmlFor="login_email">Username</label>
                <input
                  type="text"
                  id="login_email"
                  className="input-text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="login-input-field">
                <label htmlFor="login_password">Password</label>
                <input
                  type="password"
                  id="login_password"
                  className="input-text"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="login-input-field">
                <span className="input-checkbox">
                  <input
                    className="checkbox-flip"
                    type="checkbox"
                    id="check1"
                  />
                  <label htmlFor="check1">
                    <span></span>Remember Me
                  </label>
                </span>
              </div>
              <div className="login-input-field">
                <div className="button-container">
                  <button onClick={handleSubmit}>Login</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
