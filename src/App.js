import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
//import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ProTip from './ProTip';

import Protected from './Protected';
import Public from './Public';
import netlifyIdentity from 'netlify-identity-widget';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  withRouter
} from 'react-router-dom';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// copied straight from https://reacttraining.com/react-router/web/example/auth-workflow
////////////////////////////////////////////////////////////
// 1. Click the public page
// 2. Click the protected page
// 3. Log in
// 4. Click the back button, note the URL each time

function AuthExample() {
  return (
    <Router>
      <Container maxWidth="sm">
        <Box my={8}>
          <Route path="/public" component={Public} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/protected" component={Protected} />
          <Grid container spacing={2}>
            <Grid item xs={6} sm={12}>
                <Button 
                  href="/public"
                  variant="outlined" 
                  color="secondary"
                  text-align="center"
                  >
                    Public Page
                  </Button>

            </Grid>
            <Grid item xs={6} sm={12}>
              
              <Button 
                href="/protected"
                variant="outlined" 
                color="primary"
                text-align="center"
                >
                  Protected Page
                </Button>

            </Grid>
          </Grid>
          <AuthButton />
        </Box>
      </Container>
    </Router>
  );
}

const netlifyAuth = {
  isAuthenticated: false,
  user: null,
  authenticate(callback) {
    this.isAuthenticated = true;
    netlifyIdentity.open();
    netlifyIdentity.on('login', user => {
      this.user = user;
      callback(user);
    });
  },
  signout(callback) {
    this.isAuthenticated = false;
    netlifyIdentity.logout();
    netlifyIdentity.on('logout', () => {
      this.user = null;
      callback();
    });
  }
};

const AuthButton = withRouter(
  ({ history }) =>
    netlifyAuth.isAuthenticated ? (
      <p>
        Welcome!{' '}
        <Button 
          variant="outlined" 
          color="secondary"
          onClick={() => {
            netlifyAuth.signout(() => history.push('/'));
          }}
        >
          Sign out
        </Button>
      </p>
    ) : (
        <Typography component="div" gutterBottom spacing={4}>
          <p>You are not logged in.</p>
        </Typography>

    )
);

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        netlifyAuth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

class Login extends React.Component {
  state = { redirectToReferrer: false };

  login = () => {
    netlifyAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  };

  render() {
    let { from } = this.props.location.state || { from: { pathname: '/' } };
    let { redirectToReferrer } = this.state;

    if (redirectToReferrer) return <Redirect to={from} />;

    return (
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <Typography component="div" gutterBottom>
            <p>You must log in to view the page at {from.pathname}</p>
            <Button
              variant="contained" 
              color="primary"
              onClick={this.login}>
              Log in
            </Button>
          </Typography>
        </Grid>
      </Grid>
    );
  }
}
export default AuthExample;