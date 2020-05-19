import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { IconContext } from "react-icons";
import { FAPencilAlt, FaPencilAlt } from "react-icons/fa";
import Mutations from "../../graphql/mutations";

const { UPDATE_GOD } = Mutations;

export class NameDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      name: this.props.name || "",
    };

    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit(e) {
    e.preventDefault();
    this.setState({ editing: true });
  }

  fieldUpdate(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  render() {
    if (this.state.editing) {
      return (
        <Mutation mutation={UPDATE_GOD}>
          {(updateGod, data) => (
            <div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  updateGod({
                    variables: { id: this.props.id, name: this.state.name },
                  }).then(() => this.setState({ editing: false }));
                }}
              >
                <input
                  value={this.state.name}
                  onChange={this.fieldUpdate("name")}
                />
                <button type="submit">Update Name</button>
              </form>
            </div>
          )}
        </Mutation>
      );
    } else {
      return (
        <div>
          <div
            onClick={this.handleEdit}
            style={{ fontSize: "10px", cursor: "poniter", display: "inline" }}
          >
            <IconContext.Provider value={{ className: "custom-icon" }}>
              <FaPencilAlt />
            </IconContext.Provider>
          </div>
          <h2>{this.state.name}</h2>
        </div>
      );
    }
  }
}

export default NameDetail;
