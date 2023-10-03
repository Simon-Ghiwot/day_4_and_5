import { useContext, useState } from "react";
import { ctx } from "../TodoContext";
import { useNavigate } from "react-router-dom";

export type TodoProps = {
   isChecked: boolean;



   clearDialog: ()=>void;
   setOnDialogDone: (  func: (newVal: string) => void  )=>void;
   setDialogVisible: (b: boolean)=>void;
   todo: string;
   dateCreated: Date;
   index: number;
   setDialogValue: (newVal: string)=>void;
   isDeleted: boolean
   setOnEdit: (newVal: boolean)=>void;
   
};

const Todo = (props: TodoProps)=>{
   const nav = useNavigate();

   const texStyle = {fontSize: '1.2rem', textDecoration: props.isChecked ? 'line-through': 'none'};
   const [index, setIndex] = useState(props.index)

   const flatButtonStyle = {

      border: '0px',
      background: 'inherit'
      
   };
   const {deleteTodo, checkTodo, } = useContext(ctx);

   
   const [todo, setTodo] = useState<string>(props.todo);
   const onChanged = ()=>{
       checkTodo(index)
     
   }
   const editMode = ()=>
   {
       nav(`/edit/${index}`)

   }
   return ( <>
            {
                !props.isDeleted &&
        
                <div style={{display: 'flex', justifyContent: 'space-evenly', width: '90%', background: 'white', padding:'5px',
                            margin: '5px'
            
                }
                
                }>
                    <input size={50} type="checkbox" onChange={onChanged} checked={props.isChecked}/>
                    <span   style={texStyle}>{todo}</span>
                    <span   style={texStyle}>{props.dateCreated.toString()}</span>
                    <div>
                        <button   style={{...flatButtonStyle, color: 'blue'}} onClick={editMode}>Edit</button>
                        <button   style={{...flatButtonStyle, color: 'red'}} onClick={()=>{
                            console.log('deleting index ', index)
                            deleteTodo(index)
                           
                        }}>Delete</button>
                    </div>
                </div>
            }
            </>
   )
}
export {Todo}