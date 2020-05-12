import React from "react";
import "./AgentCard.css";

export default function AgentCard(props) {
  return (
    <div>
      <b>
        {props.firstName} {props.lastName}
      </b>
      <br />
      <img src={props.imageUrl} alt="agent" />
      <br />
      Motto: {props.motto}
      <br />
      E-mail:{props.email}{" "}
    </div>
  );
}
