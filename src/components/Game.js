import React from 'react'
import GameCard from './GameCard'
import '../styles/GameCard.css'

export default function Game(props) {

    return (
        <div className='game-container'>
            <GameCard url={`/games/${props.gameId}`} title={props.title}/>
        </div>
    )
}
