import React from 'react';
import Post from "./Post/Post";
import style from './MyPosts.module.css'

const MyPosts = (props) => {
    let postElement = props.postData.map(p => <Post post={p.post}/>)
    let PostText = React.createRef();

    let updateChange = () => {

    }

    let createPost = () => {
        let post = PostText.current.value
        props.addPost(post)
    }
    return (
        <div className={style.myPost}>
            <div className={style.block}>
                <textarea ref={PostText} onChange={updateChange }  className={style.text} />
                <button onClick={createPost} className={style.btn} >add</button>
            </div>
            <div className={style.post}>
                {postElement}
            </div>

        </div>
    );
};

export default MyPosts;