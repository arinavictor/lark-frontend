import React, { Component } from 'react'
import axios from 'axios'
import './App.css'

import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/registration/Login'
import Signup from './components/registration/Signup'

export default class App extends Component {
  state = {
    isLoggedIn: false,
    user: {},
  }

  handleLogin = data => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      user: {}
    })
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

