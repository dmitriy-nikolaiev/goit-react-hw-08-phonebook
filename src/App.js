import { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { authOperations } from './redux/auth';
import { connect } from 'react-redux';

import Container from './components/Container';
import AppBar from './components/AppBar';
import HomePage from './components/HomePage';
import ContactsView from './components/ContactsView';
import Register from './components/Register';
import Login from './components/Login';

import './App.scss';

// import ContactForm from './components/ContactForm/';
// import Filter from './components/Filter';
// import ContactList from './components/ContactList/';

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      // <div className="App">
      <Container>
        <AppBar />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/contacts" component={ContactsView} />
        </Switch>
      </Container>
      // </div>
      // <div className="App">
      //   <h1>Phonebook</h1>
      //   <ContactForm />
      //   <h2>Contacts</h2>
      //   <Filter />
      //   <ContactList />
      // </div>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
// export default App;
