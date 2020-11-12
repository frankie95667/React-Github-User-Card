import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import User from "./User";
import UserSearch from "./UserSearch";

export default class UserList extends Component {
  state = {
    users: [],
    user: "frankie95667"
  };

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/${this.state.user}`)
      .then(res => {
        console.log(res);
        this.setState(prevState => ({
          users: [...prevState.users, res.data]
        }));
      })
      .catch(err => {
        console.log(err.message);
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.user !== this.state.user) {
      axios
        .get(`https://api.github.com/users/${this.state.user}`)
        .then(res => {
          console.log(res);
          this.setState({
            users: [res.data]
          });
        })
        .catch(err => {
          console.log(err.message);
        });
    }
  }

  updateUser = user => {
    this.setState({
      user
    });
  };

  render() {
    return (
      <>
        <UserSearch updateUser={this.updateUser} />
        <CardList>
          {this.state.users.map(user => {
            return <User user={user} />;
          })}
        </CardList>
      </>
    );
  }
}

const CardList = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
