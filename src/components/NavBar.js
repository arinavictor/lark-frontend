import React from 'react'
import { connect } from 'react-redux'
import { logoutUser } from '../actions/user'
import {Link} from 'react-router-dom'

// import {Link} from 'react-router-dom'

import Logo from '../images/lark_logo3.png'

function NavBar({user}) {
    return (
        <div className='nav-bar'>
            <img alt='logo' src={Logo}/> 
            <ul className='main-nav'>
                <li><Link to='/games'>games</Link></li>
                <li><Link to='/contact'>contact</Link></li>
               <li>{ user ? <Link to='/login'>logout</Link> : null }</li>
            </ul>
        </div>
    )
}


const mapStateToProps = ({user}) => ({
    user
})

const mapDispatchToProps = (dispatch) => ({
    logoutUser: () => dispatch(logoutUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
