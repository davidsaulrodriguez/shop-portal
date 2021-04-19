import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import Navigation from './components/Navigation/Navigation';
import SignIn from './pages/SignIn/SignIn';
import ContactUs from './pages/ContactUs/ContactUs';
import Shop from './pages/Shop/Shop';
import SignUp from './pages/SignUp/SignUp';
import CheckOut from './pages/CheckOut/CheckOut';
// import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

function App() {
  return (
    <>
      <CssBaseline />
      <Navigation />
      <Switch>
        <Route path='/login' render={(props) => <SignIn {...props} />} />
        <Route path='/shop' render={(props) => <Shop {...props} />} />
        <Route
          exact
          from='/contact'
          render={(props) => <ContactUs {...props} />}
        />
        <Route exact from='/signup' render={(props) => <SignUp {...props} />} />
        <Route
          exact
          from='/checkout'
          render={(props) => <CheckOut {...props} />}
        />
      </Switch>
    </>
  );
}

export default App;
