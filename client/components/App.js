import React from "react";
import { Route } from "react-router-dom";
import GodsList from "./gods/GodsList";
import CreateComponent from "./create";
import NavBar from "./NavBar";

const App = () => (
  <div>
    <NavBar />
    <Route exact path="/" component={GodsList} />
    <Route exact path="/new" component={CreateComponent} />
  </div>
);

export default App;
