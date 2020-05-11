import React, { useState, useEffect } from "react";
import PropertyCard from "./PropertyCard";
import axios from "axios";
// import { Link } from "react-router-dom";

export default function PropertyList() {
  const [propertyCards, setPropertyCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(
        "https://my-json-server.typicode.com/Codaisseur/listings-agents-data/listings"
      );
      setPropertyCards(data.data);
    };
    fetchData();
  }, []);

  return (
    <ul>
      {propertyCards.map((house) => {
        return <li key={house.id}> {PropertyCard(house)}</li>;
      })}
    </ul>
  );
}
