import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, IconButton, Typography, makeStyles } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './pages/login/Login';

const Title: string = "test";


export default function App() {

  const styles = makeStyles((theme) => ({
    root: {
      flexGrow: theme.spacing(1)
    },
    title: {
      flexGrow: theme.spacing(1),
    },

  }));

  const classes = styles();
  return (
    <div className="root">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            {Title}
          </Typography>
          <IconButton edge="end"
            aria-label="user details"
            color="inherit">
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact={true} component={Login} />

        </Switch>
      </BrowserRouter>
    </div>
  );

}