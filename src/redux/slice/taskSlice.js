import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name:"task",
    initialState:{
        New:[],
        Create:[],
        Completed:[],
        Progress:[],
    },
    reducers:{
        SetNewTask:(state,action)=>{
            state.New = action.payload;
        },
        CreateTask:(state,action)=>{
            state.Create = action.payload;
        },
        CompletedTask:(state,action)=>{
            state.Completed = action.payload;
        },
        ProgressTask:(state,action)=>{
            state.Progress = action.payload;
        },
    }
});

export const {SetNewTask,CreateTask,CompletedTask,ProgressTask} = taskSlice.actions;

export default taskSlice.reducer;