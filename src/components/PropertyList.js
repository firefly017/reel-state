import React, { useState, useEffect } from "react";
import PropertyCard from "./PropertyCard";
import axios from "axios";

export default function PropertyList() {
  const [propertyCards, setPropertyCards] = useState([]);
  const [maxBudget, setMaxBudget] = useState(886000);
  const [minFloor, setMinFloor] = useState(44);
  const [allProperties, setAllProperties] = useState([]);

  const floorChange = (event) => {
    console.log("minimum size is" + event.target.value);
    setMinFloor(event.target.value);
    showFilteredProperties(allProperties, event.target.value, maxBudget);
  };

  const budgetChange = (event) => {
    console.log("maxBudget is " + event.target.value);
    setMaxBudget(event.target.value);
    showFilteredProperties(allProperties, minFloor, event.target.value);
  };
  async function fetchData() {
    const data = await axios.get(
      "https://my-json-server.typicode.com/Codaisseur/listings-agents-data/listings"
    );
    setAllProperties(data.data);
    showFilteredProperties(data.data, minFloor, maxBudget);
  }
  async function showFilteredProperties(
    properties,
    minimumFloor,
    maximumBudget
  ) {
    const filteredProperties = properties.filter((property) => {
      if (property.priceEuro > maximumBudget) {
        console.log(
          "too expensive property price is " +
            property.priceEuro +
            " maxBudget is" +
            maxBudget
        );
        return false;
      }
      if (property.m2 < minimumFloor) {
        console.log(
          "too small property size is " +
            property.m2 +
            " min size is " +
            minFloor
        );
        return false;
      }
      console.log(
        "big enough, property size is " +
          property.minFloor +
          " cheap enough property price is" +
          property.priceEuro
      );
      return true;
    });
    setPropertyCards(filteredProperties.sort(comparePriceEuro));
  }
  useEffect(() => {
    fetchData();
  }, []);
  function comparePriceEuro(property_a, property_b) {
    const diff = property_a.priceEuro - property_b.priceEuro;

    return diff;
  }
  return (
    <div>
      <div>
        Filters:
        <div>
          <label>Max. budget (€){maxBudget}: </label>
          <input
            type="range"
            id="budget"
            name="budget"
            min="161000"
            max="886000"
            value={maxBudget}
            onChange={budgetChange}
          />
        </div>
        <div>
          <label>Min. floor space (m2) :{minFloor} </label>
          <input
            type="range"
            id="space"
            name="space"
            min="44"
            max="103"
            value={minFloor}
            onChange={floorChange}
          />
        </div>
      </div>
      <ul>
        {propertyCards.map((house) => {
          return <li key={house.id}> {PropertyCard(house)}</li>;
        })}
      </ul>
    </div>
  );
}
