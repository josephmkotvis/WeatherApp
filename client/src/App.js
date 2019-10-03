import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WeatherPage from './components/weather/WeatherPage';
import Alert from './components/layout/Alert';
//Redux
import { Provider } from 'react-redux';
import store from './store';
import Navbar from './components/layout/Navbar';
import PageNotFound from './components/layout/PageNotFound';



const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Alert />
        <Navbar />
        <Route exact path="/" component={WeatherPage} />
        <section className="container">
          <Switch>
          <Route exact path="*" component= {PageNotFound} />
          </Switch>
        </section>
      </Fragment>
    </Router>
  </Provider>
);

export default App;
