import { useState } from "react";
import "./login.css";
import Logo_CJC from "../../assets/Logo.png";
import { useNavigate } from "react-router-dom";
import "react-router-dom";

export default function LoginPage() {
  const [emailUser, setEmailUser] = useState("");
  const [passwordUser, setPasswordUser] = useState("");
  const navigate = useNavigate();
  /*
  nodejs express for log in auth
  */
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const blog = {
        emailUser,
        passwordUser,
      };
      // console.log(blog);
      const response = await fetch("http://192.168.8.40:3002/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(blog),
      });
      // navigate("/LandingPage");
      const result = await response.json();
      console.log();
      if (result.message == "Invalid credential") {
        console.log("pop out");
      } else {
        console.log(result.token);
        localStorage.setItem("token", result.token);
        console.log("log in successfuly");
        navigate("/LandingPage");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const error_message = "Please login";

  return (
    <>
      <form onSubmit={handleSubmit}>
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
              <button
                id="login_button"
                type="submit"
                // onClick={navigate("/LandingPage")}
              >
                Log in
              </button>

              {/* <Link to={"/LandingPage"}></Link> */}
              <p id="forgot_password-prompt">Forgot password?</p>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
