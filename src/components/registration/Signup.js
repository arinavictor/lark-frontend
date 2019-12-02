import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import '../../styles/Registration.css'
import backArrow from '../../images/left-arrow.png'

export default class Login extends Component {
    
    state = {
        username: '',
        password: '',
        password_confirmation: ''
    }

    handleChange = event => {
        const {name, value} = event.target
        this.setState({
            [name]: value 
        })
    }

    handleSubmit = event => {
        event.preventDefault()
      
    }
    render() {
        const {username, password, password_confirmation} = this.state 
        return (
            <div>
                <Link to='/'>
                    <img alt='back' className='back-btn' src={backArrow}/>
                </Link>
                <div className='form-link-container'>
                    <section className='link-container' >
                        <Link to='/login'>Log In</Link>
                        <Link to='/signup'>Sign Up</Link>
                    </section>

               
                    <form onSubmit={this.handleSubmit}>
                        <input 
                            placeholder='username' 
                            type='text' 
                            name='username' 
                            value={username} 
                            onChange={this.handleChange}
                        />
                        <input 
                            placeholder='password' 
                            type='password' 
                            name='password' 
                            value={password} 
                            onChange={this.handleChange}
                        />
                        <input 
                            placeholder='confirm password' 
                            type='password' 
                            name='password_confirmation' 
                            value={password_confirmation} 
                            onChange={this.handleChange}
                        />

                        <button placeholder='submit' type='submit'>
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}