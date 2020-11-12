import React from "react";

export default class UserSearch extends React.Component {
  state = {
    search: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.updateUser(this.state.search);
    this.setState({
      search: ""
    });
  };

  handleChange = e => {
    this.setState({
      search: e.target.value
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          name="search"
          id="search"
          value={this.state.search}
          placeholder="Search..."
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}
