import React from "react";

export default function PropertyCard(house) {
  return (
    <div>
      <p>
        Address: {house.address.street} {house.address.number}
        {", "}
        {house.address.city} <br />
        Price € : {house.priceEuro} <br />
        m2: {house.m2}
        <br />
        Bedrooms: {house.bedRooms}{" "}
      </p>
    </div>
  );
}
