import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {postUser} from '../../actions/user'

import '../../styles/Registration.css'

 class Signup extends Component {
    
    state = {
        username: '',
        password: ''
    }

    handleChange = event => {
        const {name, value} = event.target
        this.setState({
            [name]: value 
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.postUser(this.state)
            .then(r => this.props.history.push('/login'))
      
    }
    render() {
        const {username, password} = this.state 
        return (
            <div>
                <main className='main'>
                <div className='form-link-container'>
                    <div className='form-container'>
                        <h1>Sign Up</h1>
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
                        
                            <button placeholder='submit' type='submit'>
                                Sign Up
                            </button>
                        </form>
                        <Link to='/login'>
                            <p>Already a user?</p>
                        </Link>
                    </div>
                </div>
            </main>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    postUser: userInfo => postUser(dispatch, userInfo)
})

export  default connect(null, mapDispatchToProps)(Signup)