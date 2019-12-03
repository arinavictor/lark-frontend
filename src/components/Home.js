import React from 'react'
// import {Link} from 'react-router-dom'
import '../styles/Home.css'
import NavBar from './NavBar'
import Login from './registration/Login'
import Signup from './registration/Signup'

export default function Home(props) {
    return (
        <div>
           <NavBar />
            <main className='main'>
                <div>
                   <Login history={props.history}/>
                   <Signup history={props.history}/>
                </div>
            </main>
        
            
        </div>
    )
}
