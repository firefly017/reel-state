import React from "react";

export default function SliderFilter() {
  return (
    <div>
      <p>
        Filters:
        <div>
          <label for="budget">Max. budget: </label>
          <input type="range" id="budget" name="budget" min="0" max="11" />
        </div>
        <div>
          <label for="space">Min. floor space: </label>
          <input type="range" id="space" name="space" min="0" max="11" />
        </div>
      </p>
    </div>
  );
}
