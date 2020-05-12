import React from "react";
import Title from "../components/Title";

import PropertyList from "../components/PropertyList";

export default function ListingPage() {
  return (
    <div>
      <Title title="Listings" />
      <PropertyList />
    </div>
  );
}
