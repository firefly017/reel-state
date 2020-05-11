import React from "react";
import "./App.css";
import Home from "./pages/Home";
import ListingPage from "./pages/ListingPage";
import ScheduleViewing from "./pages/ScheduleViewing";
import AbooutUs from "./pages/AboutUs";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
        <ListingPage />
        <ScheduleViewing />
        <AbooutUs />
      </header>
    </div>
  );
}

export default App;
