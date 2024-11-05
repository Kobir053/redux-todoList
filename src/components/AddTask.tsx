import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { addTask, ITask } from '../store/features/todoSlice';

const AddTask: React.FC = () => {

    const [newTask, setNewTask] = useState<string>("");

    const todoList = useSelector((state: RootState) => state.todo.tasks);

    const dispatch: AppDispatch = useDispatch();

    const addNewTask = () => {
        if(newTask.length < 2){
            alert("task too short");
            return;
        }
        let tempTask: ITask = {
            id: todoList[todoList.length-1].id + 1,
            text: newTask,
            completed: false
        };
        dispatch(addTask({task: tempTask}));
    }

  return (
    <div className='add-task'>
        <input type="text" placeholder='task to-do' onChange={(e: any) => setNewTask(e.target.value)}/>
        <button onClick={addNewTask}>Add Task</button>
    </div>
  )
}

export default AddTask