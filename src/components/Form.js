import React from "react";

export default function Form() {
  return (
    <form>
      <p>
        <label>Listing address </label>
        <select name="listings">
          <option value="select">Selecet Property</option>
        </select>
      </p>
      <p>
        <label>Name </label>
        <input type="text" name="firstName" />
      </p>

      <p>
        <label>Email </label>
        <input type="text" name="email" />
      </p>
      <p>
        <label>Phone </label>
        <input type="text" name="phoneNumber" />
      </p>

      <p>
        <label>Date</label>
        <input type="date" name="dateOfBirth"></input>
      </p>
      <p>
        <input type="button" value="Submit" />
      </p>
    </form>
  );
}
