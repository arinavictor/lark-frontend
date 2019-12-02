import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Home.css'
// import Logo from '../images/lark_logo.png'
import NavBar from './NavBar'
import Login from './registration/Login'
import Signup from './registration/Signup'

export default function Home() {
    return (
        <div>
           <NavBar />
            <main className='main'>
                <div>
                   <Login />
                   {/* <Signup /> */}
                </div>
            </main>
        
            
        </div>
    )
}
