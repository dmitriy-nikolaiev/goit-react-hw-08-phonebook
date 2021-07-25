// import PropTypes from 'prop-types';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

const HomePage = () => (
  <div style={styles.container}>
    <h1 style={styles.title}>Phonebook</h1>
    <p>Ваша телефонная книга</p>
    <p>Для продолжения необходимо войти или зарегистрироваться</p>
  </div>
);

export default HomePage;
