import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import ListingPage from "./pages/ListingPage";
import ScheduleViewing from "./pages/ScheduleViewing";
import AbooutUs from "./pages/AboutUs";

function App() {
  return (
    <div className="App">
      <nav>
        <NavBar />
      </nav>
      {/* <header className="App-header"> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/listings" component={ListingPage} />
        <Route path="/scheduleViewing" component={ScheduleViewing} />
        <Route path="/aboutUs" component={AbooutUs} />
      </Switch>
      {/* </header> */}
    </div>
  );
}

export default App;
