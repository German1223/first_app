import di from '../Dialogs.module.css'

const Message = (props) => {
    return <div className={di.message}>{props.message}</div>
}
export default Message;