import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import jwt from "jwt-decode";
import logo from "./img/on_shake.png";
import qr_logo from "./img/qr_code.svg"
import "./Login.css";
import "./App.css";
import axios from "axios";
import { setAuthToken } from "./App";
import { queryByPlaceholderText } from "@testing-library/react";
function loggedIn() {
  console.log("Check login");
  var isExpired = false;
  const token = localStorage.getItem("token");
  if (token === null) {
    return false;
  }
  var decodedToken = jwt(token);
  console.log(token);
  var dateNow = new Date();
  var secTime = parseInt(dateNow.getTime() / 1000);
  if (decodedToken.exp < secTime) isExpired = true;
  return !isExpired;
}
function HomePage() {
  const { id } = useParams();
  const [msg, setMsg] = useState("JE ME CONNECTE");
  const [isActive, setIsActive] = useState(false);
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const [qrvalidation, setQrValidation] = useState("");

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
        window.location.href = "/" + id;
        setMsg("Connexion...");
        setIsActive(true);
      })
      .catch((err) => {
        setError("CODE D'ACCÈS INCORRECT");
      });
  };
  useEffect(() => {
    console.log("ééééééééééééééé");
    console.log(id);
    if (loggedIn()) {
      axios.get("http://localhost:8000/qr/" + id).then(function (response) {
        setQrValidation(response.data.response);
      });
    }
  }, []);
  if (loggedIn()) {
    if (qrvalidation == "1") {
      return <div> Le code est bon- {qrvalidation} </div>;
    } else if (qrvalidation == "0") {
      return <div> Le code n'est pas bon- {qrvalidation} </div>;
    } else {
      return <div> Loading... </div>;
    }
  } else {
    return (
      <div className="App">
        <header className="App-header">
          <img className="qr_logo" src={qr_logo} alt="on_shake"></img>
          <h1 className="login_title">
            DTS
          </h1>
          <h2 className="login_subtitle">
            Aimanter, monitorer, performer !
          </h2>
          <input
            onChange={(e) => setPin(e.target.value)}
            className="pin"
            placeholder="____"
            type="password"
            pattern="[0-9]*"
            inputMode="numeric"
            style={{ textAlign: "center", fontSize: "48px" }}
            size="5"
            maxLength={4}
          />
          <div className="container2">
            <button
              className={isActive ? "active" : ""}
              id="btn"
              onClick={handleClick}
            >
              <p id="btnText">{msg}</p>
              <div className="check-box">
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
}

export default HomePage;
