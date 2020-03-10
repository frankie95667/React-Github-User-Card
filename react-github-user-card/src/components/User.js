import React from "react";
import UserDetails from "./UserDetails";
import { makeStyles } from "@material-ui/core/styles";
import styled from 'styled-components';
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';


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
const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

export default class User extends React.Component {
  state = {
    expanded: false
  };

  classes = () => {
    const classes = useStyles();
    return classes;
  }

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
            <Avatar aria-label={this.props.user.name} className={this.classes.avatar} >A</Avatar>
          }

          title={this.props.user.name}
        />
        <Media image={this.props.user.avatar_url} title={this.props.user.name} />
        <IconButton
          className={clsx(this.classes.expand, {
            [this.classes.expandOpen]: this.state.expanded,
          })}
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
