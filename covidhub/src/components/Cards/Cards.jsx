import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import "./Cards.module.css";
const Cards = (props) => {
  console.log(props);
  return (
    <div className="container">
      <Grid container spacing={3} justify="center">
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">Data</Typography>
            <Typography color="textSecondary">Date</Typography>
            <Typography variant="body2">
              Number of active COVID-19 cases
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5">Data</Typography>
            <Typography color="textSecondary">Date</Typography>
            <Typography variant="body2">
              Number of COVID-19 recoveries
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">Data</Typography>
            <Typography color="textSecondary">Date</Typography>
            <Typography variant="body2">Number of COVID-19 deaths</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
