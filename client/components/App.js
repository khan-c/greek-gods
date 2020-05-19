import React from "react";
import { Route, Switch } from "react-router-dom";
import GodsList from "./gods/GodsList";
import CreateComponent from "./create";
import NavBar from "./NavBar";
import GodDetail from "./gods/GodDetail";

const App = () => (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/gods/:id" component={GodDetail} />
      <Route exact path="/new" component={CreateComponent} />
      <Route path="/" component={GodsList} />
    </Switch>
  </div>
);

export default App;
