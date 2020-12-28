import React from 'react';

// libraries
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Grid, Typography, Button } from '@material-ui/core';

// Components
import { POLLS } from '../../assets/placeholder/widget';

// images
import pulseImg from '../../assets/images/pulseImg.png';

const Pulse = () => {
  const polls = POLLS;
  const classes = useStyles();
  return (
    <Card className={classes.pulseCard}>
      <CardContent>
        <Typography variant='h1'>Student Pulse</Typography>
        <Grid container alignItems='center'>
          <Grid item md={8}>
            <p className={classes.pulseQuestion}>{polls.question}</p>
            {polls.votes.map((value) => (
              <div key={value}>
                <input className={classes.voteOption} type='radio' name='votes' value={value} />
                {value}
              </div>
            ))}
            <Button variant='contained' color='primary' className={classes.voteButton}>
              Vote
            </Button>
          </Grid>
          <Grid item md={4} className={classes.pulseContainer}>
            <Grid container justify='center'>
              <img src={pulseImg} alt='Pulse Image' />
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Pulse;

const useStyles = makeStyles((theme) => ({
  pulseCard: {
    boxShadow: theme.shadows[0],
  },
  pulseQuestion: {
    fontSize: '1rem',
    fontWeight: '700',
    lineHeight: '1.5rem',
  },
  votes: {
    marginTop: '12px',
    fontSize: '1 rem',
    lineHeight: '1.5rem',
  },
  voteOption: {
    marginBottom: '12px',
    marginRight: '10px',
  },
  voteButton: {
    marginTop: '50px',
  },
  pulseContainer: {
    width: '100%',
    paddingTop: '1rem ',
    paddingBottom: '1rem ',
  },
}));