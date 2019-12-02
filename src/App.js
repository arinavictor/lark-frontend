import React, { Component } from 'react'
import './App.css'

import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/registration/Login'
import Signup from './components/registration/Signup'
import Landing from './components/Landing'

export default class App extends Component {
  // state = {
  //   isLoggedIn: false,
  //   user: {},
  // }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route 
              exact path='/login' 
              render={props => (
                <Login {...props} />
              )}
            />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/landing' component={Landing} />   
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

