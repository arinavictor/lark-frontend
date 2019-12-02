import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Home.css'
import Logo from '../images/lark_logo.png'

export default function Home() {
    return (
        <div>
            <nav className='nav-bar'>
                <img alt='logo' src={Logo}/>
            </nav>
            <main className='main'>
                <div>
                    <Link to='/login'>
                        <button>Welcome!</button>
                    </Link>
                </div>
            </main>
        
            
        </div>
    )
}
