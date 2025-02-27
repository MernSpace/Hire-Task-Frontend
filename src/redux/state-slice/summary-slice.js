import {createSlice} from "@reduxjs/toolkit";
export const summarySlice=createSlice({
    name:'summary',
    initialState:{

        TotalTask:[],
        PriorityTask:[]
    },
    reducers:{
        SetSummary:(state,action)=>{
            state.TotalTask=action.payload
        },
        setPriorityTask:(state,action)=>{
            state.PriorityTask=action.payload
        }
    }
})
export  const {SetSummary,setPriorityTask}=summarySlice.actions;
export default  summarySlice.reducer;
