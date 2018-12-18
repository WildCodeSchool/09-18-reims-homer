import React, { Component, Fragment } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

export class Profile extends Component {
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
            <ListItemText primary="email" secondary="mon email" />
          </ListItem>
        </List>
        <Link to="/signin">
          <Button>Disconnect</Button>
        </Link>
      </Fragment>
    );
  }
}

export default Profile;
