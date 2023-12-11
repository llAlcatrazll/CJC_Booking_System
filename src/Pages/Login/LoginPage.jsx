// import * as React from "react";
import { useState } from "react";
import "./login.css";
import Logo_CJC from "../../assets/Logo.png";

import { Link } from "react-router-dom";
import "react-router-dom";
export default function LoginPage() {
  const [emailUser, setEmailUser] = useState("");
  const [passwordUser, setPasswordUser] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {
      emailUser,
      passwordUser,
    };
    console.log(blog); // Log the details to the console
  };
  const error_message = "Please login";
  return (
    <>
      <form onChange={handleSubmit}>
        <div className="login_bg">
          <div id="bg_blug">
            <div id="login_box_main">
              <div>
                <img id="cjc_logo" src={Logo_CJC} alt="" />
              </div>
              <div id="error_spacer">
                <p id="error_box">{error_message}</p>
              </div>
              <input
                type="text"
                value={emailUser}
                onChange={(e) => setEmailUser(e.target.value)}
                placeholder="email"
              />
              <input
                id="bottom_input"
                type="password"
                placeholder="password"
                onChange={(e) => setPasswordUser(e.target.value)}
              />
              <Link to={"/LandingPage"}>
                <button id="login_button" type="button">
                  Log in
                </button>
              </Link>
              <p id="forgot_password-prompt">Forgot password?</p>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
