import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button"
import { Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import { BrowserRouter,Route, Link } from "react-router-dom"
import Work from './Work';
import About from './About';
import Contact from './Contact';

const useStyles = makeStyles((theme) => ({
  bar: {
    justifyContent: "space-between"
  },
  link: {
    textDecoration: "none",
    color: "inherit"
  }
}));

function App() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)
  return (
    <div>
    <AppBar position="static">
      <Toolbar className={classes.bar}>
        <Typography variant="h6">
          laelu's portfolio
        </Typography>
        <Tabs value={value} onChange={(e, newValue)=>{setValue(newValue)}}>
          {/* <Link className={classes.link} to="/"> */}
          <Tab label="About" />
          {/* </Link>
          <Link className={classes.link} to="/work"> */}
          <Tab label="Work" />
          {/* </Link>
          <Link className={classes.link} to="contact"> */}
          <Tab label="Contact" />
          {/* </Link> */}
        </Tabs>
      </Toolbar>
    </AppBar>

    {
      value < 2 
      ?
      value === 0 ? <About></About> : <Work></Work>
      :
      <Contact></Contact>
    }
    </div>
  );
}

export default App;
