import React, { Component } from 'react'
import './App.css'

import {BrowserRouter, Switch, Route} from 'react-router-dom'
// import Home from './components/Home'
import Login from './components/registration/Login'
import Signup from './components/registration/Signup'
import Landing from './components/Landing'
import Games from './components/Games'
import Contact from './components/Contact'

export default class App extends Component {


  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route 
              exact path='/login' 
              render={props => (
                <Login {...props} />
              )}
            />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/games' component={Games} />
            <Route exact path='/contact' component={Contact} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}



