import React, { Component } from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

export class Profile extends Component {
  render() {
    const user = this.props;
    return (
      <div>
        <List>
          <ListItem>
            <ListItemText primary="Email" secondary={user.email} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Name" secondary={user.name} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Lastname" secondary={user.lastname} />
          </ListItem>
        </List>
        <Link to="/">
          <Button>Se Déconnecter</Button>
        </Link>
      </div>
    );
  }
}

export default Profile;
