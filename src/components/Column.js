import React, { Component } from 'react'
import { Droppable } from 'react-beautiful-dnd'
import '../styles/NumberGame.css'
import Number from './Number'

export default class Column extends Component {
    render() {

        return (
            <div className='column-container'>
                <h1 className='column-title'>{this.props.column.title}</h1>
                <Droppable droppableId={this.props.column.id}>
                    {(provided) => (
                        <div className='number-boxes'
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {this.props.numbers.map((number, index) => <Number key={number.id} number={number} index={index}/>)}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </div>
        )
    }
}
