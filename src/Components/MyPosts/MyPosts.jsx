import React from 'react';
import Post from "./Post/Post";
import style from './MyPosts.module..css'

const MyPosts = (props) => {
    let postElement = props.postData.map(p => <Post post={p.post}/>)
    return (
        <div>
            <div className={style.block}>
                <textarea/>
                <button>add</button>
            </div>
            <div>
                {postElement}
            </div>

        </div>
    );
};

export default MyPosts;