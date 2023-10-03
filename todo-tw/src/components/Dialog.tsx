export type DialogProps = {
    onClose: () => void;
    show: boolean;
    children: React.ReactNode
};
const Dialog: React.FC<DialogProps> = (props: DialogProps) =>{
    //style={{zIndex: '10', width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.3)'}}
    return <>
            {props.show && <div className="z-10 w-screen h-screen bg-black/50 flex flex-col justify-center">
                   
                {/*style={{borderRadius: '20px',  background: 'white', width: '50%',  height: '80%', position:'fixed', left: '25%', top: '10%'}} */}
                <div className="rounded-xl bg-white w-1/2 h-4/5 fixed left-1/4 top-1/10">
                    {/**style={{display: 'flex', justifyContent: 'end', margin: '30px'}} */}
                    <div className="flex justify-end m-8">
                         <button className="icon-btn" onClick={props.onClose}>X</button>
                    </div>
                    {props.children}
                </div>
               

            </div>}
    </>

}
export default Dialog;