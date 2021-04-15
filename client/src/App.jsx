import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container, CssBaseline } from '@material-ui/core';
import Navigation from './components/Navigation/Navigation';
import SignIn from './pages/SignIn/SignIn';
import ContactUs from './pages/ContactUs/ContactUs';
import Home from './pages/Home/Home';
import SignUp from './pages/SignUp/SignUp';

function App() {
  return (
    <>
      <CssBaseline />
      <Navigation />
      <Container>
        <Switch>
          <Route exact match from='/' render={(props) => <Home {...props} />} />
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
        </Switch>
      </Container>
    </>
  );
}

export default App;
