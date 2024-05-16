import { useState, ChangeEvent, FormEvent } from "react";
import {NavLink, useNavigate} from "react-router-dom";
import "../../style/users/login.css";

interface User {
  name: string;
  email: string;
  number: string;
  password: string;
  cpassword: string;
}

function Signup(): JSX.Element {
  const navigate = useNavigate();

  const [user, setUser] = useState<User>({
    name: "",
    email: "",
    number: "",
    password: "",
    cpassword: "",
  });

  const handleInputs = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const postData = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user)

    const { name, email, number, password, cpassword} = user;

    // if (!number || (number.toString().length > 10 || number.toString().length < 10)){
    //   window.alert("Phone Number should be 10-digits ");
    //   return;
    // }
    if (number.length !== 10){
      window.alert("Phone Number should be 10-digits ");
      return;
    }
    else if (password !== cpassword) {
      window.alert("Passwords do not match");
      return; // Exit the function early
    }

    
    const resp = await fetch("http://localhost:8000/user-signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        number
      }),
    });

    const data = await resp.json();

    console.log(data);

    if (resp.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    }
    else {
      window.alert("Congratulation...Registration Successfullyy Done..");
      console.log("Registration Successfull");

      navigate("/");
    }
  };

  return (
    <>
      <div className="user-signup">
        <div className="user-signup-form">
          <h1 className="login-title">StkPredict</h1>

          <form onSubmit={postData}>
            <div style={{ display: "flex", gap: "1rem" }}>
              <div className="form-group mb-3">
                <label className="login-input-text" htmlFor="exampleInputName">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control-input"
                  id="adminExampleInputName"
                  value={user.name}
                  onChange={handleInputs}
                  placeholder="name"
                  required
                />
              </div>

              <div className="form-group">
                <label className="login-input-text" htmlFor="exampleInputPhone">
                  Phone No.
                </label>
                <input
                  type="number"
                  name="number"
                  className="form-control-input"
                  id="exampleInputPhone"
                  value={user.number}
                  onChange={handleInputs}
                  placeholder="Phone"
                  required
                />
              </div>
            </div>

            <div className="form-group mb-3">
              <label className="login-input-text" htmlFor="exampleInputEmail1">
                Email address
              </label>
              <input
                type="email"
                name="email"
                className="form-control-input"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={user.email}
                onChange={handleInputs}
                placeholder="Enter email"
                required
              />
            </div>

            <div style={{ display: "flex", gap: "1rem", marginBottom: "-4%" }}>
              <div className="form-group">
                <label
                  className="login-input-text"
                  htmlFor="exampleInputPassword"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="form-control-input"
                  name="password"
                  id="exampleInputPassword"
                  value={user.password}
                  onChange={handleInputs}
                  placeholder="Password"
                  required
                />
              </div>
              <div className="form-group">
                <label
                  className="login-input-text"
                  htmlFor="exampleInputCPassword"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="cpassword"
                  className="form-control-input"
                  id="exampleInputCPassword"
                  value={user.cpassword}
                  onChange={handleInputs}
                  placeholder="Password"
                  required
                />
              </div>
            </div>

            <div className="text-center">
              <button type="submit" className="login-btn">
                Register
              </button>
            </div>

            <div className="text-center mt-3 signup-page-link">
              Already have an account?{" "}
              <NavLink className={"NavLink"} to={"/"}>
                Sign In
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
