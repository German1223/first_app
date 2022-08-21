import React from "react"
import di from './Dialogs.module.css'
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import Dialogs from "./Dialogs";
import { sendMessageActionCreator, updateMessageActionCreator } from "../../redux/dialogs-reducer";
import {connect} from "react-redux"

let mapStateToPops = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: ()=>{
            dispatch(sendMessageActionCreator())
        },
        updateMessage: (body)=>{
            dispatch(updateMessageActionCreator(body))
        },
    }
}

const DialogsContainer = connect(mapStateToPops, mapDispatchToProps)(Dialogs);


export default DialogsContainer;