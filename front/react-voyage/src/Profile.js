import React, { Component, Fragment } from 'react';
import { List, ListItem, ListItemText } from "@material-ui/core"
import { Link } from "react-router-dom"
import "./App.css"

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {
        email: "homer.simpson@wildcodeschool.fr",
        name: "Homer",
        lastname: "Simpson"
      }
    }
  }

  render() {

    return (
      <Fragment>
        <List>
          <ListItem>
            <ListItemText primary="email" secondary={this.state.profile.email} />
          </ListItem>
          <ListItem>
            <ListItemText primary="name" secondary={this.state.profile.name} />
          </ListItem>
          <ListItem>
            <ListItemText primary="last name" secondary={this.state.profile.lastname} />
          </ListItem>
        </List>

        <Link to="/signin">Deconnection</Link>
      </Fragment>
    );
  }
}

export default Profile