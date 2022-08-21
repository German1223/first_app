const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
    posts: [
        { id: 1, message: 'Hi, people', likesCount: '5' },
        { id: 2, message: 'Hello, world', likesCount: '15' },
        { id: 3, message: 'My first post', likesCount: '23' }
    ],
    newPostText: 'ddd',
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        case UPDATE_POST:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state;
    }

}
export const addPost = () =>
    ({ type: ADD_POST })

export const updatePost = (text) =>
    ({ type: UPDATE_POST, newText: text })

export const setUserProfile = (profile) =>
    ({ type: SET_USER_PROFILE, profile })


export default profileReducer;
