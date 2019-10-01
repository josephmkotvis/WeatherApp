import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Weather from './components/weather/Weather';
import Alert from './components/layout/Alert';
//Redux
import { Provider } from 'react-redux';
import store from './store';
import Navbar from './components/layout/Navbar';



const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Alert />
        <Navbar />
        <Route exact path="/" component={Weather} />
        <section className="container">
          <Switch>
          </Switch>
        </section>
      </Fragment>
    </Router>
  </Provider>
);

export default App;
