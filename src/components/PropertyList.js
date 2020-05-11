import React, { useState, useEffect } from "react";
import PropertyCard from "./PropertyCard";
import axios from "axios";

export default function PropertyList() {
  const [propertyCards, setPropertyCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(
        "https://my-json-server.typicode.com/Codaisseur/listings-agents-data/listings"
      );
      setPropertyCards(data.data.sort(comparePriceEuro));
    };
    fetchData();
  }, []);
  function comparePriceEuro(property_a, property_b) {
    const diff = property_a.priceEuro - property_b.priceEuro;

    return diff;
  }
  return (
    <ul>
      {propertyCards.map((house) => {
        return <li key={house.id}> {PropertyCard(house)}</li>;
      })}
    </ul>
  );
}
