import React from 'react';
import AddTaskContainer from './TaskAdd/AddTaskContainer';
import EditOrDelTask from './TaskAdd/EditorDelTask';

class App extends React.Component{
    render(){
        return (
            <div>
                <AddTaskContainer />
                <EditOrDelTask />
            </div>
        );
    }
}

export default App;