import React, {Component} from 'react';
import axios from 'axios';

export default class UserDetails extends Component {
    state = {
        followers: []
    }

    componentDidMount(){
        axios.get(this.props.user.followers_url)
        .then(res => {
            console.log(res);
            this.setState({
                followers: res.data
            })
        })
        .catch(err => console.log(err.message));
    }

    render(){
        return (
            <div>
                <h3>Followers:</h3>
                {this.state.followers.map(follower => {
                    return <p><a href={follower.html_url}>{follower.login}</a></p>
                })}
            </div>
        )
    }
}