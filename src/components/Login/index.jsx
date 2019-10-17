import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.scss";

function LoginPage(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [emptyUserName, setEmptyUsername] = useState(true);
  const [emptyPassword, setEmptyPassword] = useState(true);

  const login = () => {
    console.log("Login");
    window.location.href = "%PUBLIC_URL%/pricing-special/zone";
  };

  const onChangeUserName = e => {
    setUsername(e.target.value);
  };

  const onChangePassword = e => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    console.log("the username and password", username, password);
    if (username.length > 0) {
      setEmptyUsername(false);
    }
    if (password.length > 0) {
      setEmptyPassword(false);
    }
  }, [username, password]);

  return (
    <div className="container">
      <div className="login-square">
        <div className="login-title">
          <p style={{}}>
            Welcome to{" "}
            <strong>
              Speed<strong style={{ color: "#0069d9" }}>LINK</strong>
              <strong
                style={{
                  fontSize: "15px",
                  color: "red",
                  margin: "-10px 0 0 0"
                }}
              >
                {" "}
                V2.0.0
              </strong>
            </strong>{" "}
          </p>
          <h4>Please use your credentials to login</h4>
        </div>

        <form className="login-form" onSubmit={login}>
          <div className="login-input-field">
            <label>Username</label>
            <br></br>
            <span className="login-username">
              <i className="far fa-user"></i>
            </span>
            <input
              className="searchBox-input-search"
              type="text"
              onChange={onChangeUserName}
              onClick={onChangeUserName}
              placeholder="Username"
              required
            ></input>
            {!emptyUserName ? (
              <p className="login-alert-text">
                Please input the Username, can't be empty
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="login-input-field">
            <label>Password</label>
            <br></br>
            <span className="login-password">
              <i className="fas fa-key"></i>
            </span>
            <input
              className="searchBox-input-search"
              style={{ width: "calc(85% + 3px) " }}
              type="password"
              onChange={onChangePassword}
              onClick={onChangePassword}
              placeholder="Password"
              required
            ></input>
            <span className="login-password">
              <i className="fas fa-eye"></i>
            </span>
          </div>
          <div className="login-remember">
            <input type="checkbox" />
            <p style={{ margin: "-25px 0 0 30px" }}>Remember me</p>
          </div>
          <Link to="/pricing-special/zone">
            <button className="login-btn-login" type="submit">
              <span style={{ background: "#218838" }}></span>
              <p>Fake Login, Click to main Page</p>
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
