import React, { useState, useEffect } from "react";
import PropertyCard from "./PropertyCard";
import axios from "axios";

export default function PropertyList() {
  const [propertyCards, setPropertyCards] = useState([]);
  const [maxVal, setMaxVal] = useState(0);
  const [maxBudget, setMaxBudget] = useState(0);
  const [minBudget, setMinBudget] = useState(0);
  const [minFloor, setMinFloor] = useState(0);
  const [minSize, setMinSize] = useState(0);
  const [maxSize, setMaxSize] = useState(0);
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
    const prices = data.data.map((property) => {
      return property.priceEuro;
    });
    const maxPrice = Math.max.apply(null, prices); // Math.max(prices);
    setMaxVal(maxPrice);
    setMaxBudget(maxPrice);
    const minPrice = Math.min.apply(null, prices);
    setMinBudget(minPrice);

    const floors = data.data.map((property) => {
      return property.m2;
    });
    const minFloorSize = Math.min.apply(null, floors);
    const maxFloorSize = Math.max.apply(null, floors);
    setMinSize(minFloorSize);
    setMaxSize(maxFloorSize);
    if (minFloorSize > minFloor) {
      setMinFloor(minFloorSize);
    }
    showFilteredProperties(data.data, minFloorSize, maxPrice);
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
            min={minBudget}
            max={maxVal}
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
            min={minSize}
            max={maxSize}
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
