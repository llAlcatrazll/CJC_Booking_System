// import * as React from "react";
import { useState } from "react";
import "./login.css";
import Logo_CJC from "../../assets/Logo.png";

import { useNavigate } from "react-router-dom";
import "react-router-dom";
export default function LoginPage() {
  const [emailUser, setEmailUser] = useState("");
  const [passwordUser, setPasswordUser] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    const blog = {
      emailUser,
      passwordUser,
    };
    console.log(blog);
    navigate("/LandingPage");
  };

  const error_message = "Please login";
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="login_bg">
          <div id="bg_blug"> </div>
          <div id="login_box_main">
            <div>
              <img id="cjc_logo" src={Logo_CJC} alt="" />
            </div>
            <div id="error_spacer">
              <p id="error_box">{error_message}</p>
            </div>
            <input
              type="email"
              value={emailUser}
              onChange={(e) => setEmailUser(e.target.value)}
              placeholder="email"
              required
            />
            <input
              id="bottom_input"
              type="password"
              placeholder="password"
              onChange={(e) => setPasswordUser(e.target.value)}
              required
            />
            <button id="login_button" type="submit">
              Log in
            </button>
            <p id="forgot_password-prompt">Forgot password?</p>
          </div>
        </div>
      </form>
    </>
  );
}
