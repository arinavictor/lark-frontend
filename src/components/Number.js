import React, { Component } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import '../styles/NumberGame.css'

export default class Number extends Component {
    render() {
        return (
            <Draggable
              draggableId={this.props.number.id}  
              index={this.props.index}
            >
                {(provided) => (
                    <div className='number-box'
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                    >
                        {this.props.number.content}
                    </div>
                )}
            </Draggable>
        )
    }
}
