import React, { Component } from "react";
import { List, ListItem, ListItemText, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

class Profile extends Component {
  constructor(props) {
    super(props);
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
      <div>
        <List>
          <ListItem>
            <ListItemText
              primary="email"
              secondary={this.state.profile.email}
            />
            <ListItemText primary="name" secondary={this.state.profile.name} />
            <ListItemText
              primary="lastname"
              secondary={this.state.profile.lastname}
            />
            <Link to="/signin">
              <Button
                variant="contained"
                color="primary"
                type="submit"
                value="Déconnexion"
              >
                Déconnexion
              </Button>
            </Link>
          </ListItem>
        </List>
      </div>
    );
  }
}

export default Profile;
