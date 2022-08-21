import React from 'react';
import { addPost, updatePost} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {connect} from "react-redux"


let mapStateToProps = (state) =>{
    return{
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}




export default connect(mapStateToProps,{updatePost,addPost})(MyPosts);
