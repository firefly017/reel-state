import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <NavLink
        activeStyle={{ fontWeight: "bold", color: "black" }}
        to="/"
        exact
      >
        Home
      </NavLink>
      {" | "}
      <NavLink
        activeStyle={{ fontWeight: "bold", color: "black" }}
        to="/listings"
      >
        Listings
      </NavLink>
      {" | "}
      <NavLink
        activeStyle={{ fontWeight: "bold", color: "black" }}
        to="/scheduleViewing"
      >
        Schedule viewing
      </NavLink>
      {" | "}
      <NavLink
        activeStyle={{ fontWeight: "bold", color: "black" }}
        to="/aboutUs"
      >
        About us
      </NavLink>
    </div>
  );
}
