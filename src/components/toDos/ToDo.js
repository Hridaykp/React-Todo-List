import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleCheck,
    faPen,
    faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

//to-do componenets
const ToDo = (props) => {
    return (
        //props of todo object
        <div>
            {props.toDo.map((task, index) => {
                return (
                    <React.Fragment key={task.id}>
                        <div className="col taskBg">
                        {/* setting class name on Complete Condition  */}
                        <div className={task.completed ? "done" : ""}>
                            <span className="taskNumber">{index + 1}</span>
                            <span className="taskText">{task.title}</span>
                        </div>
                        <div className="iconsWrap">
                            <span
                                title="done / undone"
                                onClick={(e) => props.markDone(task.id)}
                            >
                                <FontAwesomeIcon icon={faCircleCheck} />
                            </span>
                            {/* checking Task Is Compleated Or Not  */}
                            {task.completed ? null : (
                            <span
                                title="Edit"
                                onClick={() =>
                                    props.setUpdateData({
                                        id: task.id,
                                        title: task.title,
                                        completed: task.completed ? true : false,
                                    })
                                }
                            >
                                <FontAwesomeIcon icon={faPen} />
                            </span>
                            )}
                            <span title="Delete" onClick={() => props.deleteTask(task.id)}>
                                {/* trash Icon for Deleting Single todo  */}
                                <FontAwesomeIcon icon={faTrashCan} />
                            </span>
                        </div>
                        </div>
                    </React.Fragment>
                );
            })}
        </div>
    );
};

export default ToDo;
