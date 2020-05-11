import React, { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setFormData({
      ...formData,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  function submitForm() {
    console.log("Submitting the form", formData);
    setFormSubmitted(true);
  }

  if (formSubmitted) {
    return <h3>Thank you for scheduling the property viewing!</h3>;
  }

  return (
    <form>
      <p>
        <label>Listing address </label>
        <select name="listings" onChange={handleInputChange}>
          <option value="select">Selecet Property</option>
        </select>
      </p>
      <p>
        <label>Name </label>
        <input type="text" name="name" onChange={handleInputChange} />
      </p>

      <p>
        <label>Email </label>
        <input type="text" name="email" onChange={handleInputChange} />
      </p>
      <p>
        <label>Phone </label>
        <input type="text" name="phoneNumber" onChange={handleInputChange} />
      </p>

      <p>
        <label>Date</label>
        <input type="date" name="date" onChange={handleInputChange}></input>
      </p>
      <p>
        <input type="button" value="Submit" onClick={submitForm} />
      </p>
    </form>
  );
}
