import { createContext, ReactNode } from "react";

export interface Todo     {
    isChecked: boolean,
    todo: string,
    dateCreated:  Date,
    isDeleted: boolean
   }
  
export interface TodoContext{
    addTodo: (todo: Todo) => void;
    deleteTodo : (i: number)=> void;
    checkTodo : (i: number) => void;
    editTodo : (i:number, newVal: Todo) => void;
    todos: Todo[]
  
  }

const ctx = createContext<TodoContext>({addTodo: (todo: Todo) => {},
    deleteTodo : (i: number)=> {},
    checkTodo : (i: number) => {},
    editTodo : (i:number, newVal: Todo) => {},
    todos: []});

export {ctx}


export default ({children, value}: {children: ReactNode, value: TodoContext}) =>{
    return <ctx.Provider value={value}>
        {children}
    </ctx.Provider>
}