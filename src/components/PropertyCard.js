import React from "react";

export default function PropertyCard(props) {
  return (
    <div>
      <p>
        Address: {props.address.street} {props.address.number}
        {", "}
        {props.address.city} <br />
        Price € : {props.priceEuro} <br />
        m2: {props.m2}
        <br />
        Bedrooms: {props.bedRooms}{" "}
      </p>
    </div>
  );
}
