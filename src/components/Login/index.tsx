import React from "react";
import "./index.scss";

export const Login = () => {
  return (
    <div className="login-container">
      <div className="left-field-box"></div>
      <div className="right-field-box">
        <div className="login-filed">
          <div className="login-title-container">
            <h1>Login</h1>
            <span>Don't you have an account?</span>
          </div>

          <div className="login-input-field">
            <label htmlFor="login_email">Email</label>
            <input type="text" id="login_email" className="input-text" />
          </div>
          <div className="login-input-field">
            <label htmlFor="login_password">Password</label>
            <input type="password" id="login_password" className="input-text" />
          </div>
          <div className="login-input-field">
            <span className="input-checkbox">
              <input className="checkbox-flip" type="checkbox" id="check1" />
              <label htmlFor="check1">
                <span></span>Remember Me
              </label>
            </span>
          </div>
          <div className="login-input-field">
            <div className="button-container">
              <button>Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
