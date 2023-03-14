import React, { useState } from 'react';
import Task from './Task';

const TaskList = ({tasks}) => {
    const [stateTasks, setTasks] = useState(tasks);
    const changeTaskDone = function(no, done) {
        stateTasks.findIndex(task => task.no === no);
    }

    return (
        <div>
            <ul>
                {
                    stateTasks.map(task => <Task 
                                        key={task.no}
                                        no={task.no}
                                        name={task.name}
                                        done={task.done}
                                        callback={changeTaskDone} />)                    
                }
            </ul>
        </div>
    );
};

export default TaskList;
react-addons-update