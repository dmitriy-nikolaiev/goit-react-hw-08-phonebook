import { Component, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { authOperations } from './redux/auth';

import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

import Container from './components/Container';
import AppBar from './components/AppBar';

// import HomePage from './components/HomePage';
// import ContactsView from './components/ContactsView';
// import Register from './components/Register';
// import Login from './components/Login';

import './App.scss';

const HomePage = lazy(() => import('./components/HomePage'));
const ContactsView = lazy(() => import('./components/ContactsView'));
const Register = lazy(() => import('./components/Register'));
const Login = lazy(() => import('./components/Login'));

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      // <div className="App">
      <Container>
        <AppBar />
        <Suspense fallback={<p>Выполняем...</p>}>
          <Switch>
            <PublicRoute exact path="/" component={HomePage} />
            <PublicRoute path="/register" restricted redirectTo="/contacts" component={Register} />
            <PublicRoute path="/login" restricted redirectTo="/contacts" component={Login} />
            <PrivateRoute path="/contacts" redirectTo="/login" component={ContactsView} />
          </Switch>
        </Suspense>
      </Container>
      // </div>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
// export default App;
