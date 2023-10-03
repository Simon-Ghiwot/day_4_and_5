import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createContext } from 'react';
import TodoContext, { Todo } from './TodoContext';
import Add from './Add';
import Edit from './Edit';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);





const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/add',
    element: <Add />
  },
  {
    path: '/edit/:index',
    element: <Edit />
  }
])

const App = ()=>{
  const [todos, setTodos] = useState<Todo[]>([])
  const addTodo = (todo: Todo) =>{
    todos.push(todo)
    setTodos(todos)
  }
  const deleteTodo = (i: number)=>{
      if(i >= todos.length || i < 0){
        throw new Error("Error invalid index given")
      }
      console.log('Me 2 deleting ', i)
      todos[i] = {...(todos[i]), isDeleted: true};
      setTodos([...todos]) 
  }
  const editTodo = (i:number, newVal: Todo) =>{
    if(i >= todos.length || i < 0){
      throw new Error("Error invalid index given")
    }
    todos[i] = newVal
    setTodos([...todos]) 
  }
  const checkTodo = (i: number) =>{
    if(i >= todos.length || i < 0){
      throw new Error("Error invalid index given")
    }
    todos[i].isChecked = !todos[i].isChecked;
    setTodos([...todos])
  }
   
   return (
    <TodoContext value={{editTodo, addTodo, checkTodo, deleteTodo, todos}}>
        <img style = {{position: 'fixed', left: '0', top: '0'}} width={'5%'}  height={'10%'} src='logo' /> 
        <RouterProvider router={router} />
    </TodoContext>
   )
}
root.render(
  <React.StrictMode>
     <App />
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
