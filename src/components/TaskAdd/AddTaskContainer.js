import '../../style.css';
import React from "react";
import AddTaskInput from './addTaskInput'

class AddTaskContainer extends React.Component{
    render(){
        return (
            <div className="header">
                <p>My To Do List</p>
                <div className="AddTaskContainer">
                    <AddTaskInput />
                </div>
            </div>
        );
    }
}

export default AddTaskContainer;