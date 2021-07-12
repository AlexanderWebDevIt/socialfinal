import React from 'react';
import Post from "./Post/Post";
import style from './MyPosts.module..css'

const MyPosts = (props) => {
    return (
        <div>
            <div className={style.block}>
                <textarea/>
                <button>add</button>
            </div>
            <div>
                <Post postData={props.postData}/>
                <Post postData={props.postData}/>
                <Post postData={props.postData}/>
                <Post postData={props.postData}/>
            </div>

        </div>
    );
};

export default MyPosts;