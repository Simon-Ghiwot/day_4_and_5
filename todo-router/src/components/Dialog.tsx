export type DialogProps = {
    onClose: () => void;
    show: boolean;
    children: React.ReactNode
};
const Dialog: React.FC<DialogProps> = (props: DialogProps) =>{
    
    return <>
            {props.show && <div style={{zIndex: '10', width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.3)'}}>
                <center>       
                <div style={{borderRadius: '20px',  background: 'white', width: '50%',  height: '80%', position:'fixed', left: '25%', top: '10%'}}>
                    <div style={{display: 'flex', justifyContent: 'end', margin: '30px'}}>
                         <button className="icon-btn" onClick={props.onClose}>X</button>
                    </div>
                    {props.children}
                </div>
                </center>

            </div>}
    </>

}
export default Dialog;