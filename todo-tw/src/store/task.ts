import { createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";



export type Task ={
    isChecked: boolean
    todo: string;
    i: number;

};


const task = createSlice({
    name: 'task',
    reducers: {
        addTask: (state, action)=>{
            const obj = action.payload
            obj.i = state.tasks.length ?? 0
            state.tasks.push(obj as Task) //This works because of immer 

        },
        checkTask:(state, action)=>{
            const index = action.payload as number;
            if(index >= state.tasks.length || index < 0){
                throw new Error("Error this index is wrong")
            }
            state.tasks[index].isChecked = true;

        },
        unCheckTask:(state, action)=>{
            const index = action.payload as number;
            if(index >= state.tasks.length || index < 0){
                throw new Error("Error this index is wrong")
            }
            state.tasks[index].isChecked = false;
            

        },
        removeTask:(state, action)=>{
            const index = action.payload as number;
            if(index >= state.tasks.length || index < 0){
                throw new Error("Error this index is wrong")
            }
            console.log(`Removing index ${index} = ${state.tasks[index].todo}`)
            const newState:any = []
            // state.tasks.splice(index, 1);
            for(let i=0;i<state.tasks.length;i++){
                if(i!=index){
                    newState.push(state.tasks[index])
                }

            }

    
            console.log(newState)
            let i = 0;
           for(const task of newState){
               task.i = i;
               i ++
           }
           return {...state, tasks:newState}

        },
        editTask:(state, action)=>{
            const index = action.payload.index as number;
            if(index >= state.tasks.length || index < 0){
                throw new Error("Error this index is wrong " + index)
            }
            state.tasks[index].todo  = action.payload.newTask;
        } ,
        setDialogVis: (state, action)=>{
             state.dialogVisible = action.payload;

        },
        setDialogVal: (state, action)=>{
            state.dialogValue = action.payload;

       }
   
    
    },
    initialState:{
        tasks:  [] as Task[],
        dialogVisible: false,
        dialogValue: ''
    }
})

const  {addTask, checkTask, removeTask, editTask, unCheckTask, setDialogVal, setDialogVis} = task.actions

export {addTask, checkTask, removeTask, editTask,unCheckTask,  setDialogVal, setDialogVis }

export default task.reducer