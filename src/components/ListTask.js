import React from 'react';
import Task from './Task';

const ListTask = (props) => {

    const taskToCompleted = props.tasks.map(task =>
        <Task
            key={task.id} task={task}
            delete={props.delete}

        />)

    return (
        <ul>
            {taskToCompleted}
        </ul>

    )
}

export default ListTask;