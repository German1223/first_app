import { Link } from 'react-router-dom';
import di from '../Dialogs.module.css'

 const DialogItem = (props) => {
   
    return (
        <div className={di.dialog}>
            <Link to={"/dialogs/" + props.id} className={di.dial}>
                {props.name}
            </Link>
        </div>
    )
}
export default DialogItem;