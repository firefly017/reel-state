import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Form() {
  // const [selectProperty, setSelectProperty] = useState([]);
  const [seleectedAddress, setSeleectedAddress] = useState("");
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(
        "https://my-json-server.typicode.com/Codaisseur/listings-agents-data/listings"
      );
      // setSelectProperty(data.data);
      setSeleectedAddress(data.data[0].id);
      setAddresses(
        data.data.map((property) => {
          return (
            property.address.street +
            " " +
            property.address.number +
            ", " +
            property.address.city
          );
        })
      );
    };
    fetchData();
  }, []);

  const [formData, setFormData] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    console.log(e.target.value);
    console.log(e.currentTarget.name);
    if (e.currentTarget.name === "addressListing") {
      setSeleectedAddress(e.target.value);
    }

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
        <label>Listing address: </label>
        <select
          name="addressListing"
          value={seleectedAddress}
          onChange={handleInputChange}
        >
          <option value={0}>Select Listing</option>
          {addresses.map((address) => {
            return (
              <option key={address} value={address}>
                {address}
              </option>
            );
          })}
        </select>
      </p>
      <p>
        <label>Name: </label>
        <input type="text" name="name" onChange={handleInputChange} />
      </p>

      <p>
        <label>Email: </label>
        <input type="text" name="email" onChange={handleInputChange} />
      </p>
      <p>
        <label>Phone: </label>
        <input type="text" name="phoneNumber" onChange={handleInputChange} />
      </p>

      <p>
        <label>Date: </label>
        <input type="date" name="date" onChange={handleInputChange}></input>
      </p>
      <p>
        <input type="button" value="Submit" onClick={submitForm} />
      </p>
    </form>
  );
}
