import logo from "./img/on_shake.png";
import "./Login.css";
import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import { setAuthToken } from "./App";

function LoginPage() {
  const [msg, setMsg] = useState("Valider");
  const [isActive, setIsActive] = useState(false);
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const handlePin = (e) => {
    setPin(e.target.value);
  };

  const handleClick = () => {
    axios
      .post("http://localhost:8000/token", {
        pin: pin,
      })
      .then(function (response) {
        //get token from response
        // console.log(response);
        const token = response.data.access_token;
        console.log(token);
        // //set JWT token to local
        localStorage.setItem("token", token);

        // //set token to axios common header
        setAuthToken(token);

        //redirect user to home page
        window.location.href = "/";
        setMsg("Connexion...");
        setIsActive(true);
      })
      .catch((err) => {
        setError("Mauvais PIN ! Merci de rescanner le QR");
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img class="logo" src={logo} alt="on_shake"></img>
        <input
          onChange={handlePin}
          className="pin"
          placeholder="PIN"
          type="password"
          pattern="[0-9]*"
          inputmode="numeric"
          style={{ textAlign: "center", fontSize: "48px" }}
          size="5"
          maxLength={4}
        />
        <div class="container2">
          <button
            className={isActive ? "active" : ""}
            id="btn"
            onClick={handleClick}
          >
            <p id="btnText">{msg}</p>
            <div class="check-box">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                <path fill="transparent" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
              </svg>
            </div>
          </button>
          <h2 style={{ color: "red" }}>{error}</h2>
        </div>
      </header>
    </div>
  );
}

export default LoginPage;
