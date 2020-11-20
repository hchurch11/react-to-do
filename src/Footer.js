import React from "react";
import logo from "./logo.svg";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer text-center ">
      <p>
        <a href="https://github.com/hchurch11/to-do">open-sourced</a> code by
        Heather Church
        <img src={logo} className="App-logo" alt="logo" />
      </p>
    </div>
  );
}
