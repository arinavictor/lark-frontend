import React, { Component } from 'react'
import '../styles/GameCard.css'
import { DragDropContext } from 'react-beautiful-dnd'
import initialData from '../initial-data'
import Sound from '../assets/kids_cheering.mp3'
import Column from './Column'

export default class NumberGame extends Component {

    state = {...initialData, win: false}

    onDragEnd = async (result) => {
        const { destination, source, draggableId } = result 

        if (!destination) { return }

        const column = this.state.column;
        const numberIds = Array.from(column.numberIds);
        numberIds.splice(source.index, 1);
        numberIds.splice(destination.index, 0, draggableId);
        const numbers = numberIds.map((numberId) => parseInt(this.state.numbers[numberId].content, 10))
        const win = await this.isSortedAsc(numbers)

        this.updateState(column, numberIds, win)
        this.playSound(win)
        
    }

    updateState = (column, numberIds, win) => {
        const newColumn = {
            ...column,
            numberIds
        }

        this.setState({ 
            column: newColumn,
            win
         })

    }

    isSortedAsc = (array) => {
          return array.every((val, i, arr) => !i || (val >= arr[i - 1]))
        }

    playSound = (win) => {
        const sound = win ? Sound : null;
        new Audio(sound).play()
    }

    restartGame = () => {
        this.setState({...initialData, win: false})
    }
    
    render() {
        
        const numbers = this.state.column.numberIds.map(numberId => this.state.numbers[numberId])
            
        return (
            <div>
            <DragDropContext onDragEnd={this.onDragEnd}>
                { 
                    <Column key={this.state.column.id} column={this.state.column} numbers={numbers}/>
                }
            </DragDropContext>
            { (this.state.win) 
             ? <button onClick={this.restartGame}>RESTART</button>
             : null 
            }   
            </div>
        )
    }
}

