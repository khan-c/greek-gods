import React, { Component } from "react";
import { Mutation } from "react-apollo";

import Mutations from "../../graphql/mutations";
import Queries from "../../graphql/queries";
const { NEW_ABODE } = Mutations;
const { FETCH_ABODES } = Queries;

export class AbodeCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      coordinates: "",
      message: "",
    };
  }

  handleSubmit(e, newAbode) {
    e.preventDefault();
    let name = this.state.name;

    newAbode({
      variables: {
        name,
        coordinates: this.state.coordinates,
      },
    }).then((data) => {
      console.log(data);
      this.setState({
        message: `New abode "${name}" created successfully`,
        name: "",
        coordinates: "",
      });
    });
  }

  update(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  updateCache(cache, { data: { newAbode } }) {
    let abodes;
    try {
      abodes = cache.readQuery({ query: FETCH_ABODES });
    } catch (err) {
      return;
    }

    if (abodes) {
      let abodeArray = abodes.abodes;

      cache.writeQuery({
        query: FETCH_ABODES,
        data: { abodes: abodeArray.concat(newAbode) },
      });
    }
  }

  render() {
    return (
      <Mutation
        mutation={NEW_ABODE}
        update={(cache, data) => this.updateCache(cache, data)}
      >
        {(newAbode, { data }) => (
          <div>
            <form onSubmit={(e) => this.handleSubmit(e, newAbode)}>
              <input
                onChange={this.update("name")}
                value={this.state.name}
                placeholder="Name"
              />
              <input
                onChange={this.update("coordinates")}
                value={this.state.coordinates}
                placeholder="coordinates"
              />
              <button type="submit">Create Abode</button>
            </form>
            <p>{this.state.message}</p>
          </div>
        )}
      </Mutation>
    );
  }
}

export default AbodeCreate;
