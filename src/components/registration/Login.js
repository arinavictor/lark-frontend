import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {userLoginFetch} from '../../actions/user'

import '../../styles/Registration.css'
import backArrow from '../../images/left-arrow.png'

class Login extends Component {
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
       this.props.userLoginFetch(this.state)
    }

    render() {
        const {username, password} = this.state 
        return (
            <div>
                <Link to='/'>
                    <img alt='back' className='back-btn' src={backArrow}/>
                </Link>

                <div className='form-link-container'>
                    <section className='link-container'>
                        <Link to='/login'>Log In</Link>
                        <Link to='/signup'>Sign Up</Link>
                    </section>
                    <div className='form-container'>
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
                                Log In
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    userLoginFetch: userInfo => dispatch(userLoginFetch(userInfo))
})

export default connect(null, mapDispatchToProps)(Login)

