import { configureStore } from "@reduxjs/toolkit";
import task from "./task";
import { getDefaultMiddleware } from '@reduxjs/toolkit';


const store = configureStore({reducer: {
    task: task,

}})

export default store