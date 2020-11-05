import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import TopNav from './templates/pricing/TopNav';
import Hero from './templates/pricing/Hero';
import PriceCard from './templates/pricing/PriceCard';
import Footer from './templates/pricing/Footer';
//import MenuAppBar from './MenuAppBar';

import FullWidthTabs from './components/FullWidthTabs';
import Protected from './Protected';
import netlifyIdentity from 'netlify-identity-widget';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
}));

export default function Pricing() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <TopNav />
      <Hero />
      <FullWidthTabs />
      <PriceCard />
      <Footer />
    </>
  );
}
