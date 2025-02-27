import {createSlice} from "@reduxjs/toolkit";
export const taskSlice=createSlice({
    name:'task',
    initialState:{
        New:[],
        Completed:[],
        Pending:[],
        Canceled:[],
        High:[],
        Low:[],
        Medium:[]
    },
    reducers:{
        SetNewTask:(state,action)=>{
            state.New=action.payload
        },
        SetCompletedTask:(state,action)=>{
            state.Completed=action.payload
        },
        SetPendingTask:(state,action)=>{
            state.Pending=action.payload
        },
        SetCanceledTask:(state,action)=>{
            state.Canceled=action.payload
        },
        SetHighTask:(state,action)=>{
            state.High=action.payload
        },
        SetLowTask:(state,action)=>{
            state.Low=action.payload
        },
        SetMediumTask:(state,action)=>{
            state.Medium=action.payload
        }

    }
})
export  const {SetMediumTask,SetHighTask,SetLowTask,SetNewTask,SetCompletedTask,SetPendingTask,SetCanceledTask}=taskSlice.actions;
export default  taskSlice.reducer;
