import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { ITask } from '../store/features/todoSlice';
import TaskCard from './TaskCard';

const TaskGrid: React.FC = () => {

    const tasks = useSelector((state: RootState) => state.todo.tasks);

    const renderTasks = () => {
        return tasks.map((task: ITask) => {
            return <TaskCard task={task}/>
        });
    }

  return (
    <div className='task-grid'>
        {renderTasks()}
    </div>
  )
}

export default TaskGrid