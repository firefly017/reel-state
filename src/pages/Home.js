import React from "react";
import { Link } from "react-router-dom";
import Title from "../components/Title";

export default function Home() {
  return (
    <div>
      <Title title="Welcome to Reel Estate" />
      <p>
        <Link to="/listings">
          <button type="button">See listings</button>
        </Link>
      </p>
      <p>
        <Link to="/aboutUs">
          <button type="button">About us</button>
        </Link>
      </p>
    </div>
  );
}
