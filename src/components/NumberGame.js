import React, { Component } from 'react'
import '../styles/GameCard.css'
import { DragDropContext } from 'react-beautiful-dnd'
import initialData from '../initial-data'
import Column from './Column'

export default class NumberGame extends Component {

    state = {...initialData, win: false}

    onDragEnd = (result) => {
        const { destination, source, draggableId } = result 

        if (!destination) { return }

        // if (
        //     destination.droppableId === source.droppableId && 
        //     destination.index === source.index
        // ) {
        //     return;
        // }

        const column = this.state.column;
        const numberIds = Array.from(column.numberIds);
        numberIds.splice(source.index, 1);
        numberIds.splice(destination.index, 0, draggableId);
        // const numbers = numberIds.map((numberId) => parseInt(this.state.numbers[numberId].content, 10))
        // const win = isSortedAsc(numbers)

        const newColumn = {
            ...column,
            numberIds
        }

        this.setState({ 
            ...this.state,
            column: newColumn
         })
        
    }

    // isSortedAsc = (list) => {
    //     return list.every((val, i, arr) => !i || (val >= arr[i - 1]));
    //   }
    render() {
        
        const numbers = this.state.column.numberIds.map(numberId => this.state.numbers[numberId])
            
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                { 
                    <Column key={this.state.column.id} column={this.state.column} numbers={numbers}/>
                }
            </DragDropContext>
        )
    }
}

