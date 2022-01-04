import React, { Component } from 'react';

class AddTask extends Component {

    // currentDate = new Date().toISOString().slice(0, 10)
    // currentTime = new Date().toLocaleTimeString();

    state = {
        text: '',
        checked: false,

    }

    handleText = (e) => {
        this.setState({
            text: e.target.value,
        })
    }

    handleCheckbox = (e) => {
        this.setState({
            checked: e.target.checked
        })
    }

    handleDate = (e) => {
        this.setState({
            date: e.target.value
        })
    }

    handleTime = (e) => {
        this.setState({
            time: e.target.value
        })
    }

    handleClick = () => {
        const { text, checked } = this.state;

        if (text.length > 3) {
            const add = this.props.add(text, checked);

            if (add) {
                this.setState({
                    text: '',
                    checked: false,

                })
            }
        }
    }

    render() {

        return (
            <>
                <div className="addTask">

                    <input type="text" placeholder="enter your task"
                        value={this.state.text}
                        onChange={this.handleText}

                    />


                    <label className="important" htmlFor="important"><span>Important:</span>
                        <input type="checkbox"
                            checked={this.state.checked} id="priority" onChange={this.handleCheckbox} />

                    </label>

                    <button onClick={this.handleClick}
                    ><i class="fas fa-plus"></i></button>

                </div>
            </>
        )
    }
}


export default AddTask;