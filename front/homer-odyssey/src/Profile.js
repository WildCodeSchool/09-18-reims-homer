import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { Link } from "react-router-dom";
import StarIcon from "@material-ui/icons/Star";

const styles = theme => ({
  root: {
    width: "100%",
    maxWitdh: 360,
    margin: "auto"
  }
});

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {
        email: "homer.simpson@wildcodeschool.fr",
        firstname: "Homer",
        lastname: "Simpson"
      }
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <List component="nav" className={classes.root}>
          <ListItem>
            <ListItemText
              primary="email"
              secondary={this.state.profile.email}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="prénom"
              secondary={this.state.profile.firstname}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="nom"
              secondary={this.state.profile.lastname}
            />
          </ListItem>
        </List>
        <Link to="/signin">
          <Button>Déconnexion</Button>
        </Link>
      </div>
    );
  }
}

export default withStyles(styles)(Profile);
