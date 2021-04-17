import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container, CssBaseline } from '@material-ui/core';
import Navigation from './components/Navigation/Navigation';
import SignIn from './pages/SignIn/SignIn';
import ContactUs from './pages/ContactUs/ContactUs';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import SignUp from './pages/SignUp/SignUp';
import CheckOut from './pages/CheckOut/CheckOut';

function App() {
  return (
    <>
      <CssBaseline />
      <Navigation />
      <Container>
        <Switch>
          <Route exact match from='/' render={(props) => <Home {...props} />} />
          <Route exact from='/shop' render={(props) => <Shop {...props} />} />
          <Route
            exact
            from='/login'
            render={(props) => <SignIn {...props} />}
          />
          <Route
            exact
            from='/contact'
            render={(props) => <ContactUs {...props} />}
          />
          <Route
            exact
            from='/signup'
            render={(props) => <SignUp {...props} />}
          />
          <Route
            exact
            from='/checkout'
            render={(props) => <CheckOut {...props} />}
          />
        </Switch>
      </Container>
    </>
  );
}

export default App;
