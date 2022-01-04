import React from 'react';

const Task = (props) => {

    const { text, id, priority } = props.task;

    const style = {
        fontWeight: 'bold',
        color: 'blue',
    }

    const deleteButton = <i className="fa fa-trash" />;

    return (

        <li style={priority ? style : null}>

            <span>{text}</span>
            <button onClick={() => props.delete(id)}
            >{deleteButton}</button>
        </li>
    )
}

export default Task;

