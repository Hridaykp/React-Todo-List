import React from "react";

const AddTaskForm = (props) => {
    // here we got props object as newTask
    return (
        //adding new task
        <div>
            <div className="row mb-3">
                <div className="col">
                    <input
                        value={props.newTask}
                        onChange={(e) => props.setNewTask(e.target.value)}
                        className="form-control form-control-lg"
                        type="text"
                        placeholder="Add task in to-do list"
                        style={{fontStyle:"italic", boxShadow:"2px 2px 1px 1px grey"}}
                    />
                </div>
                <div className="col-auto">
                    <button 
                        onClick={props.addTask} 
                        className=""
                        style={{fontSize:33, marginTop:2,fontWeight:700,
                            borderRadius:10,backgroundColor:"lightgreen",
                            boxShadow: 'rgb(38, 57, 77) 10px 20px 30px -15px',
                            
                            }}
                        >
                        
                        Add Task
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddTaskForm;
