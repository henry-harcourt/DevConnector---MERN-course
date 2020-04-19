import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Navbar from './components/layouts/Navbar'
import Landing from './components/layouts/Landing'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Alert from './components/layouts/Alert'
// Redux
import { Provider } from 'react-redux'
import store from './store'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path='/' component={Landing} />
          <section className="container">
            <Alert />
            <Switch>
              <Route eaxact path='/register' component={Register} />
              <Route eaxact path='/Login' component={Login} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
