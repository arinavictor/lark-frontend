import React from 'react'
import { connect } from 'react-redux'
import { logoutUser } from '../actions/user'
import {Link} from 'react-router-dom'

import Logo from '../assets/lark_logo4.png'

function NavBar({user}) {
    
    return (
        <div className='nav-bar'>
            <img alt='logo' src={Logo}/> 
            <div className='main-nav'>
                { localStorage.token !== undefined ? <Link to='/games'>games</Link> : null }
                { localStorage.token !== undefined ? <Link to='/contact'>contact</Link> : null }
               { localStorage.token !== undefined ? <Link to='/login'>logout</Link> : null }
            </div>
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
