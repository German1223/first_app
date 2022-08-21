import React from "react"
import di from './Dialogs.module.css'
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

const Dialogs = (props) => {
    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} id={m.id} />);
    let newMessageText = state.newMessageText;

    let newMessage = React.createRef();
   
    let sendMessage = () => {
        props.sendMessage()
    }
   
    let onMessageChange = () =>{
        debugger;
        let text = newMessage.current.value;
        props.updateMessage(text)
    }

    return (
        <div className={di.dialogs}>
            <div className={di.dialogItems}>
                {dialogsElements}
            </div>
            <div className={di.messages}>
                <div>{messagesElements}</div>
                <div>
                    <textarea onChange={onMessageChange} ref={newMessage}  value={newMessageText}/>
                    <button onClick={ sendMessage }>Send message</button>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default Dialogs;