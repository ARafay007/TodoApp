import '../../style.css';
import React from "react";

class AddTaskInput extends React.Component{
    state = { task: '' };

    onInputChange = e => {
        this.setState({ task: e.target.value });
    }

    addTask = () => {
        console.log(this.state.task);
    }

    render(){
        return (
            <div>
                <input type="text" onChange={this.onInputChange} placeholder="Title..." className="input_addText" />
                <input type="button" onClick={this.addTask} value="Add" className="btn-add" />
                <input type="button" value="Edit" className="btn-confirmEdit hide" />
            </div>
        );;
    }
}

export default AddTaskInput;