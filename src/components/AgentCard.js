import React from "react";

export default function AgentCard(props) {
  return (
    <div>
      <p>
        <b>
          {props.firstName} {props.lastName}
        </b>
        <br />
        <img src={props.imageUrl} />
        <br />
        {props.motto}
        <br />
        {props.email}{" "}
      </p>
    </div>
  );
}
