import * as React from "react";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import avi from '../Assets/ococ.jpeg'
const useStyles = makeStyles((theme) => ({
  root: {
    color: "white",
    backgroundColor: "black",
    height: '120px',
    borderColor: "#575656",
    borderStyle: "solid none none none",
    padding: '15px'
  },
  button: {
    color: "white",
    backgroundColor: "grey",
    padding: "2px",
    margin: "0",
    fontSize: "10px"
  },
  buttonContainer: {
      padding: 0,
      margin: "2px 0 0 0"
  },
  content: {
    display: "flex",
    padding: 0,
  },
  name: {
    fontWeight: 'Bold',
    fontSize: '15px'
  },
  contentContainer: {
      margin: "0",
      padding: "0 5px",
    alignItems: "center"

  },
  avatar: {
    minHeight: "60px",
      minWidth: "60px",
      margin: "5px 0"
  }
}));

export default function BasicCard(props) {
  const classes = useStyles();
  const history = useHistory();
  const handleClick = () => {
    props.setOpen(false);
    history.push("/profile");
  };
  return (
    <Card
      className={classes.root}
      onClick={handleClick}
    >
      <CardContent className={classes.content}>
        <Avatar src={avi} variant="square" className={classes.avatar} />
          <CardContent className={classes.contentContainer}>
          <Typography className={classes.name} component="div">
            {props.collectives.name}
          </Typography>
          <Typography variant="body2">
            For the love of the plant
          </Typography>
          <Typography variant="body2">
            {props.collectives.deliver ? "Deliver" : "Pick-up Only"} . {props.collectives.distance} . {props.collectives.recreational ? "Recreational" : "Medical Only"}
          </Typography>
            <CardActions className={classes.buttonContainer}>
                <Button className={classes.button} size="small">
                    View Profile
                </Button>
            </CardActions>
          </CardContent>
        </CardContent>
    </Card>
  );
}
