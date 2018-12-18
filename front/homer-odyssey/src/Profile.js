import React, { Component } from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Button
} from "@material-ui/core";
import { Link } from "react-router-dom";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "homer.simpson@wildcodeschool.fr",
      name: "Homer",
      lastname: "Simpson"
    };
  }
  render() {
    return (
      <List
        subheader={
          <ListSubheader>
            {this.state.name} {this.state.lastname}'s profile
          </ListSubheader>
        }
      >
        <ListItem>
          <ListItemText primary="Email" secondary={this.state.email} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Name" secondary={this.state.name} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Lastname" secondary={this.state.lastname} />
        </ListItem>
        <Link to="/">
          <Button variant="contained" color="primary">
            Disconnect
          </Button>
        </Link>
      </List>
    );
  }
}

export default Profile;
