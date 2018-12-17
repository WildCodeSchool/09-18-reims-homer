import React, { Component } from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Row } from "reactstrap";
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
      <List>
        <ListItem>
          <ListItemText primary="email" secondary={this.state.profile.email} />
        </ListItem>
        <ListItem>
          <ListItemText primary="name" secondary={this.state.profile.name} />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="lastname"
            secondary={this.state.profile.lastname}
          />
        </ListItem>
        <Row>
          <Link
            to="/signin"
            className="previousPage py-0 px-3 d-inline-block text-white"
          >
            <i className="fas pr-2 fa-angle-left" />
            Log out !
            <Button />
          </Link>
        </Row>
      </List>
    );
  }
}

export default Profile;
