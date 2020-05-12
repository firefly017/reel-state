import React from "react";
import { Link } from "react-router-dom";
import Title from "../components/Title";
import SelectLanguageButton from "../components/SelectLanguageButton";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <Title title="Welcome to Reel Estate" />
      <img
        src="https://www.advantageico.com/wp-content/uploads/2019/03/19.jpg"
        alt="Reel state home"
      />
      <p>
        <Link to="/listings">
          <button type="button">See listings</button>
        </Link>

        {"         "}

        <Link to="/aboutUs">
          <button type="button">About us</button>
        </Link>
      </p>
      <p>
        <SelectLanguageButton />
      </p>
    </div>
  );
}
