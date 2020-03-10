import React from "react";
import UserDetails from "./UserDetails";
import styled from 'styled-components';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const Root = styled(Card)`
  max-width: 345px;
`;

const Media = styled(CardMedia)`
  height: 0;
  padding-top: 56.25%;
`;

const Expand = styled(ExpandMoreIcon)`
  transform: rotate(0deg);
  margin-left: auto;
  transform: ${props => props.expanded ? 'rotate(180deg)' : 'rotate(0deg);'}
  
`;

const AvatarStyle = styled(Avatar)`
  background-color: ${red[500]} !important;
`;

export default class User extends React.Component {
  state = {
    expanded: false
  };

  handleExpandClick = () => {
    this.setState(prevState => ({
      expanded: !prevState.expanded
    }));
  };
  render() {
    return (
      <Root>
        <CardHeader
          avatar={
            <AvatarStyle aria-label={this.props.user.name} >A</AvatarStyle>
          }

          title={this.props.user.name}
        />
        <Media image={this.props.user.avatar_url} title={this.props.user.name} />
        <IconButton
          onClick={this.handleExpandClick}
          aria-expanded={this.state.expanded}
          aria-label="show more"
        >
          <Expand expanded={this.state.expanded}/>
        </IconButton>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <UserDetails user={this.props.user} />
          </CardContent>
        </Collapse>
      </Root>
    );
  }
}
