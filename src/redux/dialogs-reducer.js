const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, name: 'Herman' },
        { id: 2, name: 'Ann' },
        { id: 3, name: 'Victor' },
        { id: 4, name: 'Mary' },
        { id: 5, name: 'Nick' },
        { id: 6, name: 'Tom' },
        { id: 7, name: 'Peter' },
        { id: 8, name: 'Linda' }
    ],
    messages: [
        { id: 1, message: 'Lorem ipsum dolor sit' },
        { id: 2, message: 'Hello, people' },
        { id: 3, message: 'What are you doing?' }
    ],
    newMessageText: 'dddd',
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessage = {
                id: 4,
                message: state.newMessageText,
            };
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: ''
            }

        }
        case UPDATE_MESSAGE: {
            return {
                ...state,
                newMessageText: action.newText
            }

        }
        default:
            return state;
    }

}

export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}

export const updateMessageActionCreator = (text) => {
    return {
        type: UPDATE_MESSAGE,
        newText: text
    }
}
export default dialogsReducer;