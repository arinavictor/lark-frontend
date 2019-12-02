import React from 'react'
import { connect } from 'react-redux'
import { logoutUser } from '../actions/user'

import {Link} from 'react-router-dom'

import Logo from '../images/lark_logo.png'

function NavBar() {
    return (
        <div>
            <header>
                <img alt='logo' src={Logo}/> 
            </header>
            <ul>
                <li><Link to='/'>Home</Link></li>
            </ul>
        </div>
    )
}

const mapStateToProps = ({user}) => ({
    currentUser: user
})

const mapDispatchToProps = (dispatch) => ({
    logoutUser: () => dispatch(logoutUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
