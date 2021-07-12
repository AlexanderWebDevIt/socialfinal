import React from 'react';

const Post = (props) => {
    return (
        <div>
            {props.postData[0].post}
        </div>
    );
};

export default Post;