import React from "react";
import { Route, Link } from "react-router-dom";
import GodsList from "./gods/GodsList";
import GodCreate from "./create/GodCreate";

const App = () => (
  <div>
    <div>
      <Link to="/">List</Link>
      <br />
      <Link to="/new">Create God</Link>
    </div>
    <Route exact path="/" component={GodsList} />
    <Route exact path="/new" component={GodCreate} />
  </div>
);

export default App;
