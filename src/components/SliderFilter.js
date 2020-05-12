import React, { useState, useEffect } from "react";

export default function SliderFilter() {
  const [maxBudget, setMaxBudget] = useState(886000);
  const [minFloor, setMinFloor] = useState(44);
  const floorChange = (event) => {
    console.log(event.target.value);
    setMinFloor(event.target.value);
  };
  const budgetChange = (event) => {
    console.log(event.target.value);
    setMaxBudget(event.target.value);
  };
  return (
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
  );
}
