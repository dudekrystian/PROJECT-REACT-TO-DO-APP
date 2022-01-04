import React, { Component } from 'react';
import ListTask from './ListTask';
import AddTask from './AddTask';
import Header from './Header';
import './App.css';

class App extends Component {

    counter = 0
    state = {
        tasks: []
    }

    componentDidUpdate() {
        localStorage.setItem('dataStore', JSON.stringify(this.state.tasks));
    }

    componentDidMount() {
        const dataStore = JSON.parse(localStorage.getItem('dataStore'));
        if (dataStore !== null) {
            this.setState({
                tasks: dataStore,
            })
        }
    }

    addTask = (text, priority, date, time, active) => {

        const task = {
            id: this.counter,
            text: text,
            priority: priority,

        }

        this.counter++

        this.setState(prevState => ({

            tasks: [...prevState.tasks, task]
        }))

        return true
    }

    deleteTask = (id) => {
        const tasks = [...this.state.tasks]

        const index = tasks.findIndex(task => task.id === id)

        tasks.splice(index, 1)

        this.setState({
            tasks
        })
    }

    render() {
        return (
            <div className="app">

                <section className="header">
                    <Header />
                    <AddTask add={this.addTask} />
                </section>

                <section className="tasks">
                    <ListTask
                        tasks={this.state.tasks}
                        delete={this.deleteTask}
                    />
                </section>

            </div>
        )
    }

}

export default App;