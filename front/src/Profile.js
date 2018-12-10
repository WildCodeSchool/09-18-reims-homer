import React, { Component, Fragment } from "react";
import { List, ListItem, ListItemText, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      profile: {
        email: "homer.simpson@wildcodeschool.fr",
        name: "Homer",
        lastname: "Simpson"
      }
    };
  }

  render() {
    return (
      <Fragment>
        <List>
          <ListItem>
            <ListItemText
              primary="Email"
              secondary={`${this.state.profile.email}`}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Name"
              secondary={`${this.state.profile.name}`}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Lastname"
              secondary={`${this.state.profile.lastname}`}
            />
          </ListItem>
        </List>
        <Link to="/SignUp">
          <Button variant="contained" color="secondary">
            Se déconnecter
          </Button>
        </Link>
      </Fragment>
    );
  }
}

export default Profile;
