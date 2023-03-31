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
        CanceledTask:(state,action)=>{
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

export const {SetNewTask,CanceledTask,CompletedTask,ProgressTask} = taskSlice.actions;

export default taskSlice.reducer;