import React, { useContext, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Dialog from './components/Dialog';
import { Todo } from './components/Todo';


import { BrowserRouter, RouterProvider, useNavigate } from 'react-router-dom';
import TodoContext, { ctx } from './TodoContext';


function App() {
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const [dialogValue, setDialogValue] = useState<string>("");
  const onDialogDone=  useRef<( (newVal: string) => void ) | null>(null);
  const isEdit = useRef<boolean>(false);
  const {todos} = useContext(ctx)
  const navigate = useNavigate()
  console.log(todos)
  
  return (
    <div style={{width: '100vw', height: '100vh'}}>


      
       <center>
          <div id='main-container' style={{width: '50%', background: 'silver', height: '96vh', borderRadius: '20px'}}>
               <h1>Todo Lists</h1>
               {todos.map((todo, index) =>{
                  return <Todo  
                  isDeleted={todo.isDeleted}
               
                  setDialogValue={val=>setDialogValue(val)}
                  setDialogVisible={(newValue)=>setShowDialog(newValue)}
                    index={index} isChecked={todo.isChecked} todo={todo.todo} dateCreated={todo.dateCreated}
                                 setOnDialogDone={(f)=> { onDialogDone.current = f ; console.log('setting on dialog done =', onDialogDone.current);}} clearDialog={()=>setDialogValue("")}
                                 setOnEdit={(newVal) => isEdit.current = newVal}
                  />
               })}
          </div>
       </center>
       <button  
       onClick={() => navigate('/add')}
       style={{borderRadius: '100%', position: 'fixed', fontSize:'2rem',color: 'white', right: '10px', bottom: '10px', width: '70px', height: '70px', background: 'green'}}>+</button>
    </div>
  );
}

export default App;
