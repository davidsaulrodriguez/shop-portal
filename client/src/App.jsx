import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import Navigation from './components/Navigation/Navigation';
import SignIn from './pages/SignIn/SignIn';
import ContactUs from './pages/ContactUs/ContactUs';
import Home from './pages/Home/Home';

function App() {
  return (
    <>
      <CssBaseline />
      <Navigation />

      <Switch>
        <Route exact match from='/' render={(props) => <Home {...props} />} />
        <Route exact from='/login' render={(props) => <SignIn {...props} />} />
        <Route
          exact
          from='/contact'
          render={(props) => <ContactUs {...props} />}
        />
      </Switch>
    </>
  );
}

export default App;
