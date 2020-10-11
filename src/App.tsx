import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, IconButton, Typography, makeStyles } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './pages/login/Login';
import { combineReducers, createStore } from 'redux';
import mainReducer from './redux/mainReducer';
import { Provider, useSelector, useDispatch } from 'react-redux'
import ProductList from './pages/products/products-list/ProductList';


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
  const store = createStore(combineReducers({
    main: mainReducer
  }));

  return (
    <Provider store={store}>
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
            <Route path="/products" exact={true} component={ProductList} />

          </Switch>
        </BrowserRouter>
      </div>
    </Provider>

  );

}