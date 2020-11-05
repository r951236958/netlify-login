import React from 'react';
//import AppBar from '@material-ui/core/AppBar';
//import Button from '@material-ui/core/Button';
//import Card from '@material-ui/core/Card';
//import CardActions from '@material-ui/core/CardActions';
//import CardContent from '@material-ui/core/CardContent';
//import CardHeader from '@material-ui/core/CardHeader';
//import CssBaseline from '@material-ui/core/CssBaseline';
//import Grid from '@material-ui/core/Grid';
//import StarIcon from '@material-ui/icons/StarBorder';
//import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
//import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
//import { makeStyles } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
//import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
}));

export default function Hero() {
  const classes = useStyles();

  return (
    <>
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Pricing
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          Quickly build an effective pricing table for your potential customers with this layout.
          It&apos;s built with default Material-UI components with little customization.
        </Typography>
      </Container>
      {/* End hero unit */}
    </>
  );
}
