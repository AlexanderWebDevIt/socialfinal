import React from 'react';
import Post from "./Post/Post";
import style from './MyPosts.module.css'

const MyPosts = (props) => {
    let postElement = props.state.postData.map(p => <Post post={p.post} />)
    let updateChange = (e) => {
        let newText = e.target.value
        props.onPostChang(newText)
    }
    let createPost = () => { props.addPost() }
    return (
        <div className={style.myPost}>
            <div className={style.block}>
                <textarea
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