import React from 'react';
import AddTaskInput from './components/addTaskInput';
import EditOrDelTask from './components/EditorDelTask';

class App extends React.Component{
    state = { addedtask: '', newTask: '', active: '', taskList: []};

    getTask = (task='', newTask, btnToggle = '') => {
        if(task !== '')
            this.setState({ addedtask: task, newTask, active: btnToggle });
        else
            this.setState({ addedTask: newTask, newTask, active: btnToggle });
    };

    render(){
        return (
            <div>
                <AddTaskInput todoWork = {this.state.addedtask} newTask = {this.state.newTask} toggle = {this.state.active} doEdit = {this.getTask}/>
                <EditOrDelTask todoWork = {this.getTask}/>
            </div>
        );
    }
}

export default App;