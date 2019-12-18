import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.css'
import NavBar from './components/NavBar'
import Login from './components/registration/Login'
import Signup from './components/registration/Signup'
import Landing from './components/Landing'
import GamesList from './components/GamesList'
import Contact from './components/Contact'
import OtherGame from './components/OtherGame'
import NumberGame from './components/NumberGame'

export default class App extends Component {
  componentDidMount() {
    document.title = 'Lark Games'
  }
  
  render() {
    return (
      <div>
        <BrowserRouter>
        <NavBar />
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route 
              exact path='/login' 
              render={props => (
                <Login {...props} />
              )}
            />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/games' component={GamesList} />
            <Route exact path='/games/1' component={NumberGame} />
            <Route exact path='/games/2' component={OtherGame} />
            <Route exact path='/contact' component={Contact} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}




