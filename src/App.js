import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
//import Link from '@material-ui/core/Link';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import netlifyIdentity from 'netlify-identity-widget';
import React from 'react';
import {
  BrowserRouter as Router,

  Link, Redirect,

  Route,
  withRouter
} from 'react-router-dom';
//import './index.css';
//import netlifyAuth from './netlifyAuth.js';
import Protected from './Protected';
import Public from './Public';
import './style.css';
import './theme.js';

const darktheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});


// copied straight from https://reacttraining.com/react-router/web/example/auth-workflow
////////////////////////////////////////////////////////////
// 1. Click the public page
// 2. Click the protected page
// 3. Log in
// 4. Click the back button, note the URL each time

function AuthExample() {
  return (
    <Router>
    <ThemeProvider theme={darktheme}>

    
      <Container maxWidth="sm">
        <Box my={8}>
        <AuthButton />
        
        <Grid container spacing={1}>
      <Grid item xs={12} sm={8}>
      <Paper elevation={3}>
          <MenuList>
            <MenuItem><Link to="/public" className="Btn BtnOutlinedPrimary">Public Page</Link></MenuItem>
            <MenuItem><Link to="/protected" className="Btn BtnOutlinedSecondary">Protected Page</Link></MenuItem>
          </MenuList>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={8}>
        <Box bgcolor="bk.main" color="secondary.contrastText" p={2}>
        <Route path="/public" component={Public} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/protected" component={Protected} />
        </Box>
      </Grid>
    </Grid>
        
        </Box>
      </Container>
      </ThemeProvider>
    </Router>
  );
}

const netlifyAuth = {
  isAuthenticated: false,
  user: null,
  initialize(callback) {
    window.netlifyIdentity = netlifyIdentity
    netlifyIdentity.on('init', (user) => {
      callback(user)
    })
    netlifyIdentity.init()
  },
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
        <button
        className="Btn BtnOutlined"
          onClick={() => {
            netlifyAuth.signout(() => history.push('/'));
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
      <p>You are not logged in.</p>
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
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login} className="Btn BtnOutlinedPrimary">Log in</button>
      </div>
    );
  }
}
export default AuthExample;