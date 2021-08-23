import '../style.css';
import React from "react";

class AddTaskInput extends React.Component{
    state = { task: '',  show: ''};

    onInputChange = e => {
        if(this.props.todoWork === '') 
            this.props.doEdit('', e.target.value, '');
        else if(this.props.newTask !== '')
            this.props.doEdit('', e.target.value, ''); 
        else
            this.props.doEdit(e.target.value, '', 'hide');
    }

    addTask = e => {
        console.log(e.target.closest('.AddTaskContainer').chilren[0].value);
    }

    render(){
        return (
            <div className="header">
                <p>My To Do List</p>
                <div className="AddTaskContainer">
                    <input type="text" value={this.props.todoWork} onChange={this.onInputChange} placeholder="Title..." className="input_addText" />
                    <input type="button" onClick={this.addTask} value="Add" className={`btn-add ${this.props.toggle}`} />
                    <input type="button" value="Edit" className={`btn-confirmEdit ${this.props.toggle === 'hide' ? '' : 'hide'}`} />
                </div>
            </div>
        );
    }
}

export default AddTaskInput;