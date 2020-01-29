import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
// import tags for pages
import About from './pages/About'
import Landing from './pages/Landing'
import Home from './pages/Home'
import Quickstart from './pages/Quickstart'
import Workout from './pages/Workout'
import Nav from './components/Nav'
import NavDrawer from './components/NavDrawer'
import DrawerContext from './utils/DrawerContext'
import RegForm from './components/RegForm'
import Custom from './pages/Custom'
import { createMuiTheme } from '@material-ui/core/styles';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';



const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#424242',
    },
    secondary: {
      main: "#86DEB7"
    },
  },
  typography: {
    "fontFamily": "\"Bangers\"",
    "fontSize": 36
  }

});

const App = () => {

  const [drawerState, setDrawerState] = useState({
    isOpen: false
  })

  drawerState.toggleDrawer = open => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerState({ ...drawerState, isOpen: open })
  }

  return (
    // <ThemeProvider theme={theme}>
    <DrawerContext.Provider value={drawerState}>
      <Router>
        <div>
          {/* link tags */}
          <Nav />
          <NavDrawer />
          <Switch>
            <Route exact path="/">
              {/* page tags */}
              <Landing />
            </Route>
            <Route path="/home">
              {/* page tags */}
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/quickstart">
              <Quickstart />
            </Route>
            <Route path="/custom">
              <Custom />
            </Route>
            <Route path="/landing">
              <Custom />
            </Route>
            <Route path="/profile">
              <Custom />
            </Route>
            <Route path="/workout">
              <Workout />
            </Route>
          </Switch>
        </div>
      </Router>      
    </DrawerContext.Provider>
    // </ThemeProvider>

  )
}

export default App