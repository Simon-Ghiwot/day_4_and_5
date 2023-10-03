import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import { ctx } from "./TodoContext";


export default () =>{
    const [todo, setTodo] = useState<string>("");
    const navigate = useNavigate();
    const {addTodo} = useContext(ctx)
    return(
          <div style={{width: '100vw', 
          height: '100vh', display:'flex', justifyContent:'center',  flexDirection:'column', alignItems: 'center', gap: '40px'}}>
             
            <div style={{display:'flex', width: '50%', height: '50%', background:'silver',  flexDirection:'column', alignItems: 'center', gap: '40px', padding: '80px', borderRadius: '20px'}}>
             
              <input onChange={e=>setTodo(e.target.value)}  value={todo} className ='in' type='text' placeholder='Todo info' />
              <button style={{flex: '0', 'border': '0px', background: 'green', borderRadius:'5px',  
                  paddingTop: '14px',
                  paddingBottom: '14px',
              paddingRight: '80px', paddingLeft: '80px'}}
                 onClick={()=>{
                    addTodo({todo, 
                        isChecked: false,
                        dateCreated:  new Date(),
                        isDeleted: false
                    });
                    navigate('/');
                 }}
              >Done</button>
              </div>

          </div>
    );
}