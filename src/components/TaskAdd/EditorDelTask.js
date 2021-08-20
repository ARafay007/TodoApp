import '../../style.css'
import React from 'react';

class EditOrDelTask extends React.Component{
    // itemsCount = 0;
    // state = [];

    render(){
        return (
            <div className="parentDiv" data-id="unt">
                <span>Hey now brown cow</span>
                <div>
                    <button className="btn-edit">Edit</button><button className="btn-delete">Delete</button>
                </div>
            </div>
        );
    }
}

export default EditOrDelTask;