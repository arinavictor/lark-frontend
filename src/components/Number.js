import React, { Component } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import '../styles/NumberGame.css'

export default class Number extends Component {
    render() {
        const getId = this.props.number.id
        const className = `dnd-number size-${getId} number-box`

        return (
            <Draggable
              draggableId={this.props.number.id}  
              index={this.props.index}
            >
                {(provided) => (
                    <div className={className}
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
