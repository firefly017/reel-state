import React from "react";
import { Link } from "react-router-dom";
import Title from "../components/Title";
import AgentList from "../components/AgentList";

export default function AboutUs() {
  return (
    <div>
      <Title title="About us" />
      <AgentList />
      <p>
        <Link to="/listings">
          <button type="button">See listings</button>
        </Link>

        {"         "}

        <Link to="/scheduleViewing">
          <button type="button">Schedule a viewing</button>
        </Link>
      </p>
    </div>
  );
}
