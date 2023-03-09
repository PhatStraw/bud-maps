import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Button, Grid, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

function ProfilePage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2} justify="center">
        <Grid item>
          <Avatar className={classes.avatar} alt="User Avatar" src="https://picsum.photos/200" />
        </Grid>
        <Grid item>
          <Typography variant="h4" gutterBottom>
            John Doe
          </Typography>
          <Typography variant="body1" gutterBottom>
            johndoe@example.com
          </Typography>
          <Typography variant="body1" gutterBottom>
            Joined: January 1, 2022
          </Typography>
          <Button variant="contained" color="primary" className={classes.button}>
            Edit Profile
          </Button>
        </Grid>
      </Grid>
      <Paper elevation={3} className={classes.paper}>
        <Typography variant="h5" gutterBottom>
          Bio
        </Typography>
        <Typography variant="body1" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla tellus quam, nec faucibus leo fermentum sit amet. Nunc dictum mi sit amet turpis sollicitudin ultricies. Suspendisse potenti.
        </Typography>
      </Paper>
    </div>
  );
}

export default ProfilePage;