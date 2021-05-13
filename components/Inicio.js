import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(3),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);


export default function CenteredGrid() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <ReactPlayer
            style={{ maxWidth: "100%", width: "800px", margin: "0 auto" }}
            url='https://www.youtube.com/watch?v=ql94IYUrwXY'
            className='react-player'
            playing='true'
            width='1366px'
            height='768px'
            autoplay='true'
          />

        </Grid>
      </Grid>
    </div>
  );
}




