import React from 'react';
import Post from "./Post/Post";
import style from './MyPosts.module.css'
import {addPostAC, updatePAC} from "../../Redux/store";





const MyPosts = (props) => {
    let postElement = props.state.postData.map(p => <Post post={p.post}/>)
    let PostText = React.createRef();

    let updateChange = () => {
        let newText = PostText.current.value
        props.dispatch(updatePAC(newText))
    }

    let createPost = () => {
        props.dispatch(addPostAC())
    }
    return (
        <div className={style.myPost}>
            <div className={style.block}>
                <textarea
                    ref={PostText}
                    onChange={updateChange }
                    className={style.text}
                    value={props.state.newPostText}
                />
                <button onClick={createPost} className={style.btn} >add</button>
            </div>
            <div className={style.post}>
                {postElement}
            </div>

        </div>
    );
};

export default MyPosts;