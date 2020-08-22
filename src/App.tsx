import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, IconButton } from '@material-ui/core';


function App() {
  return (
    <AppBar position="fixed">
    <Toolbar>
      <IconButton edge="end"
      aria-label="user details"
      color="inherit">

      </IconButton>
    </Toolbar>
  </AppBar>
  );
}

export default App;
