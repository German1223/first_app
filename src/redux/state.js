import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi? people', likesCount: '5' },
                { id: 2, message: 'Hello, world', likesCount: '15' },
                { id: 3, message: 'My first post', likesCount: '23' }
            ],
            newPostText:'',
        },
        dialogsPage: {
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
            newMessageText:'',
        }
    },
    getState(){
        return this._state;
    },
    renderEntireTree() {
       
    },
    subscribe(observer) {
        this.renderEntireTree = observer;
    },
    dispatch(action){

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this.renderEntireTree(this._state);

    }
}


export default store;
window.store = store;