import * as React from 'react';
import {Box, Card, CardActions, CardContent, Button, Typography} from '@material-ui/core';
import { useHistory } from 'react-router-dom';

export default function BasicCard(props) {
    const history = useHistory();
    const handleClick = () => {
        props.setOpen(false)
        history.push('/profile');
      }
  return (
    <Card sx={{ height: '100vh', minWidth: 275 }} onClick={handleClick}>
        <Button >hello </Button>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="Black" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          Hello
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="Black">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
