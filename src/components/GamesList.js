import React from 'react'
import Game from './Game'
import '../styles/GameCard.css'

export default function GamesList() {
    return (
        <div>
            <h2>List of Games:</h2>
            <div className='games-list'>
            <Game gameId={1} title={"Order Numbers"} />
            <Game gameId={2} title={"Coming Soon"} />
            </div>
        </div>
    )
}
