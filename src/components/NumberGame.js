import React, { Component } from 'react'
import '../styles/GameCard.css'
import { DragDropContext } from 'react-beautiful-dnd'
import initialData from '../initial-data'
import Column from './Column'
export default class NumberGame extends Component {

    state = initialData; 

    onDragEnd = result => {
        const { destination, source, draggableId } = result 

        if (!destination) { return }

        const column = this.state.column;
        const numberIds = Array.from(column.numberIds);
        numberIds.splice(source.index, 1);
        numberIds.splice(destination.index, 0, draggableId);
        const numbers = numberIds.map((numberId) => parseInt(this.state.numbers[numberId].content, 10))
        // const win = isSortedAsc(numbers)
    }

    // isSortedAsc = (list) => {
    //     return list.every((val, i, arr) => !i || (val >= arr[i - 1]));
    //   }
    render() {
        const numbers = this.state.column.numberIds.map(numberId => this.state.numbers[numberId])
            
        return (
            <DragDropContext onDrag={this.onDragEnd}>
                { 
                    <Column key={this.state.column.id} column={this.state.column} numbers={numbers}/>
                }
            </DragDropContext>
        )
    }
}

