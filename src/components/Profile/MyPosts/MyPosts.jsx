import React from 'react';
import { addPostActionCreator, updatePostActionCreator } from '../../../redux/profile-reducer';
import myPosts from './MyPosts.module.css'
import Post from './Post/Post';



const MyPosts = (props) => {
    let postElements = 
        props.posts.map( p => <Post message={p.message} key={p.id} likesCount={p.likesCount} />);

    let newPostEl = React.createRef();

    let onAddPost = () =>{
        props.addPost();
        //props.dispatch(addPostActionCreator());
    }

    let onPostChange = () =>{
        let text = newPostEl.current.value;
        // let action = updatePostActionCreator(text);
        // props.dispatch(action); 
        props.updatePost(text)
    }

    return (
        <div>
            <div>
                <h3>My posts</h3>
            </div>
            <div>
                
                <textarea onChange={onPostChange} ref={newPostEl} value={props.newPostText} />
                <button onClick={ onAddPost }>Add post</button>
            </div>
            {postElements}
        </div>
    )
}
export default MyPosts;