import React from 'react';
import { deleteTask, ITask, toggleTask } from '../store/features/todoSlice';
import { AppDispatch } from '../store/store';
import { useDispatch } from 'react-redux';

interface TaskCardProps {
    task: ITask;
}

const TaskCard: React.FC<TaskCardProps> = ({task}) => {

    const dispatch: AppDispatch = useDispatch();

    const removeTask = () => {
        dispatch(deleteTask({id: task.id}))
    }

  return (
    <div className='task-card'>
        <h3>{task.text}</h3>
        <span onClick={() => {dispatch(toggleTask({id: task.id}))}}>{task.completed? "✅": "❌"}</span>
        <button onClick={removeTask}>Delete Task</button>
    </div>
  )
}

export default TaskCard