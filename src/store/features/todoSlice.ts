import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ITask {
    id: number;
    text: string;
    completed: boolean;
}

interface TodoStateType{
    tasks: ITask[];
}

const initialState : TodoStateType = {
    tasks: [
        {
            id: 0,
            text: "eat",
            completed: false
        },
        {
            id: 1,
            text: "sleep",
            completed: false
        },
        {
            id: 2,
            text: "pray",
            completed: true
        },
    ]
};

export const todoSlice = createSlice({
    initialState,
    name: "todo",
    reducers: {
        toggleTask: (state, action: PayloadAction<{id: number}>) => {
            const myTask = state.tasks.find((t: ITask) => t.id === action.payload.id);
            if(!myTask){
                console.log(`task with id ${action.payload.id} didn't found`);
                return;
            }
            myTask.completed = !myTask.completed;
        },
        deleteTask: (state, action: PayloadAction<{id: number}>) => {
            const taskIndex = state.tasks.findIndex((t: ITask) => t.id === action.payload.id);
            if(taskIndex < 0){
                console.log(`task with id ${action.payload.id} didn't found`);
                return;
            }
            state.tasks.splice(taskIndex, 1);
        },
        addTask: (state, action: PayloadAction<{task: ITask}>) => {
            state.tasks.push(action.payload.task);
        }
    }
});

export const {addTask, deleteTask, toggleTask} = todoSlice.actions;
export default todoSlice.reducer;