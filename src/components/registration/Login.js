import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {userLoginFetch, logoutUser} from '../../actions/user'
import '../../styles/Registration.css'
// import backArrow from '../../images/left-arrow.png'
import '../../styles/Home.css'


class Login extends Component {
    state = {
        username: '',
        password: ''
    }

    componentDidMount = () => {
        if (!this.props.alert) {
            this.props.logout()
        }   
    }

    handleChange = event => {
        const {name, value} = event.target
        this.setState({
            [name]: value 
        })
    }
    
    handleSubmit = event => {
        event.preventDefault()
       this.props.userLoginFetch(this.state, this.props.history)
        .then(r => this.props.history.push('/'))
        .catch(error => console.log(error))
       
    }
    
        render() {
        const {username, password} = this.state 
        return (
            <div>
                <main className='main'>
                <div className='form-link-container'>
                    <div className='form-container'>
                        <h1>Log In</h1>
                        <form onSubmit={this.handleSubmit}>
                            <input 
                                placeholder='username' 
                                type='text' 
                                name='username' 
                                autoComplete='username'
                                value={username} 
                                onChange={this.handleChange}
                            />
                            <input 
                                placeholder='password' 
                                type='password'
                                autoComplete='current-password'
                                name='password' 
                                value={password} 
                                onChange={this.handleChange}
                            />

                            <button placeholder='submit' type='submit'>
                                Log In
                            </button>
                            {
                                this.props.alert
                                ? <p>{this.props.alert}</p>
                                : null
                            }
                        </form>

                        <Link to='/signup'>
                        <p>New here?</p>
                        </Link>
                    </div>
                </div>
                </main>
            </div>
        )
    }
}

const mapStateToProps = ({alert}) => ({
    alert
})
const mapDispatchToProps = dispatch => ({
    userLoginFetch: (userInfo, history) => userLoginFetch(dispatch, userInfo, history),
    logout: () => logoutUser(dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)

