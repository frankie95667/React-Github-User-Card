import React, {Component} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import User from './User';

export default class UserList extends Component {
    state = {
        users: []
    }

    componentDidMount(){
        axios.get('https://api.github.com/users/frankie95667')
        .then(res => {
            console.log(res);
            this.setState(prevState => ({
                users: [...prevState.users, res.data]
            }))
        })
        .catch(err => {
            console.log(err.message);
        })
    }

    render(){
        return (
            <CardList>
                {this.state.users.map(user => {
                    return (
                        <User user={user} />
                    )
                })}
            </CardList>
        )
    }
}

const CardList = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`;