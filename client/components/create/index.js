import React, { Component } from "react";
import GodCreate from "./GodCreate";
import EmblemCreate from "./EmblemCreate";
import AbodeCreate from "./AbodeCreate";

export class CreateComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      createType: "god",
    };

    this.updateSelection = this.updateSelection.bind(this);
  }

  updateSelection(e) {
    e.preventDefault();
    this.setState({ createType: e.target.value });
  }

  render() {
    let form;
    const { createType } = this.state;

    switch (createType) {
      case "god": {
        form = <GodCreate />;
        break;
      }
      case "emblem": {
        form = <EmblemCreate />;
        break;
      }
      case "abode": {
        form = <AbodeCreate />;
        break;
      }
    }
    return (
      <div className="styled-select state">
        <select onChange={this.updateSelection}>
          <option value="god">God</option>
          <option value="emblem">Emblem</option>
          <option value="abode">Abode</option>
        </select>
        <h4>Create a new {this.state.createType}</h4>
        {form}
      </div>
    );
  }
}

export default CreateComponent;
