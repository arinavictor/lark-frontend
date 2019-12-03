import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/GameCard.css'

export default function GameCard(props) {
    return (
        <div className='game-card'>
            <Link to={props.url}>
            <h1>{props.title}</h1>
            </Link>
        </div>
    )
}
