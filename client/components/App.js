import React from "react";
import { Route, Link } from "react-router-dom";
import GodsList from "./gods/GodsList";
import CreateComponent from "./create";

const App = () => (
  <div>
    <div>
      <Link to="/">List</Link>
      <br />
      <Link to="/new">Create</Link>
    </div>
    <Route exact path="/" component={GodsList} />
    <Route exact path="/new" component={CreateComponent} />
  </div>
);

export default App;
