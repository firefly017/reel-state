import React from "react";
import Title from "../components/Title";
import SliderFilter from "../components/SliderFilter";
import PropertyList from "../components/PropertyList";

export default function ListingPage() {
  return (
    <div>
      <Title title="Listings" />
      <SliderFilter />
      <PropertyList />
    </div>
  );
}
