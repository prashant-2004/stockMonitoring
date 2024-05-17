import React, { useState, FormEvent } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../../style/users/login.css";

function Login(): JSX.Element {
  const navigate = useNavigate();

  const [Email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const loginUser = async (e: FormEvent) => {
    e.preventDefault();

    const res = await fetch("https://stock-monitoring-backend.vercel.app/user-signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: Email,
        password: password,
      }),
    });

    const data = await res.json();

    console.log(data);

    if (res.status === 400 || !data) {
      window.alert("Invalid Credentials");
      console.log("Invalid Credentials");
    } else if (res.status === 404) {
      window.alert("Network Error");
      console.log("Network Error");
    } else {
      window.alert("Login Successful");
      console.log("Login Successful");

      navigate("/home");
    }
  };

  return (
    <>
      <div className="user-login">
        <div className="user-login-form">
          <h1 className="login-title">StkPredict</h1>
          <form method="POST" onSubmit={loginUser}>
            <div className="form-group mb-3">
              <label
                className="login-input-text"
                htmlFor="exampleInputEmail1"
              >
                Email
              </label>
              <input
                type="name"
                className="form-control-input"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label
                className="login-input-text"
                htmlFor="exampleInputPassword1"
              >
                Password
              </label>
              <input
                type="password"
                className="form-control-input"
                id="exampleInputPassword1"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="text-center">
              <button type="submit" className="login-btn">
                Login
              </button>
            </div>

            <div className="text-center mt-3 signup-page-link">
              Don't have an account?{" "}
              <NavLink className={"NavLink"} to={"/user-signup"}>
                Sign Up
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
