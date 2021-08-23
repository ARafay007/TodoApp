import '../style.css'
import React from 'react';

class EditOrDelTask extends React.Component{
    // itemsCount = 0;
    // state = [];

    showTodoTask = e => {
        const task = e.target.closest('.parentDiv').children[0].textContent;

        this.props.todoWork(task, '', 'hide');
    };

    render(){
        return (
            <div className="parentDiv" data-id="unt">
                <span>Hey now brown cow</span>
                <div>
                    <button className="btn-edit" onClick={this.showTodoTask}>Edit</button>
                    <button className="btn-delete">Delete</button>
                </div>
            </div>
        );
    }
}

export default EditOrDelTask;